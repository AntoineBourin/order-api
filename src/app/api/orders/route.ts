import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const orders = await prisma.order.findMany();
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const { productId, firstName, lastName, email } = await request.json();
  const order = await prisma.order.create({
    data: { productId, firstName, lastName, email },
  });
  return NextResponse.json(order);
}
