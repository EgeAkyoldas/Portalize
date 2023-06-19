import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


import { signIn } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";



   
  const SignUpform = () => {

    const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        //Getting value from useRef()
        const name = formValues.name;
        const email = formValues.email;
        const password = formValues.password;
        //Validation
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }
        //POST form values
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });
        //Await for data for any desirable next steps
        const data = await res.json();
        console.log(data);

  };
  
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };





    return (
      <Card color="transparent" shadow={false}>
        <form className="mt-8 mb-2 w-[100%] max-w-screen-lg min-w-0 sm:w-[100%]">
          <div className="mb-1 flex flex-col gap-2">
            <Input
            color="purple"
            size="lg" 
            className="!border-0 !bg-inputBg !ring-0"
            label="Name"
            type="text"
            onChange={handleChange}
            />
            <Input
            color="purple"
            size="lg"
            className="!border-0 !bg-inputBg  !ring-0" 
            label="Email" 
            type="email"
            onChange={handleChange}
            />
            <Input
            color="purple"
            size="lg"
            className="!border-0 !bg-inputBg !ring-0"
            label="Password"
            type="password"
            onChange={handleChange}
            />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="white"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-purple-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-2" color="purple" onClick={onSubmit} fullWidth>
            Register
          </Button>
          <Typography color="white" className="mt-2 text-center font-normal">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-purple-500 transition-colors hover:text-purple-700" 
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    );
  }

  export const SignInform = () => {
    return (
      <Card color="transparent" shadow={false}>
        <form className="mt-8 mb-2 w-[100%] max-w-screen-lg min-w-0 sm:w-[100%]">
          <div className="mb-1 flex flex-col gap-2">
            <Input color="purple" size="lg" className="!border-0 !bg-inputBg" label="Name" />
            <Input color="purple" size="lg" className="!border-0 !bg-inputBg" label="Email" />
            <Input color="purple" type="password" size="lg" className="!border-0 !bg-inputBg" label="Password" />
          </div>
          
          <Button className="mt-2" color="purple" fullWidth>
            SIGN IN
          </Button>
        </form>
      </Card>
    );
  }

  export default SignUpform