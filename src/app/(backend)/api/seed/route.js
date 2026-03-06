import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    console.log("Seeding database...");

    await prisma.product.createMany({
      data: [
        {
          name: "Flex Banner",
          basePrice: 100,
          image: "/images/flex.jpg",
          description: "High quality flex banner printing for outdoor use."
        },
        {
          name: "T-Shirt Printing",
          basePrice: 250,
          image: "/images/tshirt.jpg",
          description: "Custom printed t-shirts with premium fabric."
        },
        {
          name: "Coffee Mug Print",
          basePrice: 150,
          image: "/images/mug.jpg",
          description: "Personalized mug printing with durable colors."
        }
      ]
    });

    return Response.json({
      message: "Seeding successful ✅"
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong ❌" },
      { status: 500 }
    );
  }
  
}