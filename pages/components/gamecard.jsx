import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
  import items from './data';
   
  export default function GameCard( {title, desc} ) {
    return (
      <Card className="mt-6 w-[80vw] md:!w-full min-w-[80vw] md:min-w-[100%] bg-black shadow-xl">
        <CardHeader color="blue-gray" className="relative h-56 bg-[url(https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80)] bg-cover bg-bottom">
          
        </CardHeader>
        <CardBody >
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {desc}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="hidden">Read More</Button>
        </CardFooter>
      </Card>
    );
  }