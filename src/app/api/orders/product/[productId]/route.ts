import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  const order = await prisma.order.findMany({
    where: { productId },
  });
  return NextResponse.json(order);
}
