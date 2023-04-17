import { useRouter } from "next/router";

export default function Car() {
    
    const router = useRouter()
    const { id } = router.query

    let header: string 

    if (id == "ford")
    {
        header = "Ford's suck"
    }else{
        header = id as string
    }
    return <h1 className="flex-">Hi, {header}</h1>
}