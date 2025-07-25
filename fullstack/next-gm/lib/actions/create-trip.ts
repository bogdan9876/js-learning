"use server"

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { redirect } from "next/navigation";

export async function createTrip(formData: FormData) {

    const session = await auth()
    if (!session || !session.user?.id) {
        throw new Error("Not authenticate")
    }

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const startDateStr = formData.get("startDate")?.toString();
    const endDateStr = formData.get("endDate")?.toString();

    if (!title || !description || !startDateStr || !endDateStr || !imageUrl) {
        throw new Error("All fields are required.")
    }

    const startDate = new Date(startDateStr)
    const endDate = new Date(endDateStr)

    await prisma.trip.create({
        data: {
            userId: session.user.id,
            title,
            description,
            imageUrl,
            startDate,
            endDate
        }
    })

    redirect("/trips")
}