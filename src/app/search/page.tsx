import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { redirect } from "next/navigation";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
 }


const Page = async ({ searchParams }: PageProps) => {

    const query = searchParams.query

    if(Array.isArray(query) || !query) { 
        return redirect("/")
    }


    let products = await db.select().from(productsTable).where(sql``)


    // query login setup

    return (<></>)
}

export default Page;