import { PropertyCard } from "./PropertyCard";
import one from '@/asstes/1.jpg'
import two from '@/asstes/2.jpg'
import three from '@/asstes/3.jpg'
import foure from '@/asstes/4.jpg'
import five from '@/asstes/5.jpg'
import six from '@/asstes/6.jpg'
import seven from '@/asstes/4.jpg'
import eight from '@/asstes/3.jpg'
import nine from '@/asstes/9.jpg'
import ten from '@/asstes/10.jpg'


export const propertiesList = [
    {
        id: 'pro__1',
        name: "246 Cedar St, Another City, USA",
        price: 1600,
        rating: 5,
        sqft: 400,
        beds: 2,
        baths: 2,
        image: one
    },
    {
        id: 'pro__2',
        name: "123 Maple St, Some City, USA",
        price: 1800,
        rating: 4,
        sqft: 500,
        beds: 3,
        baths: 2,
        image: two
    },
    {
        id: 'pro__3',
        name: "789 Oak St, Any City, USA",
        price: 1500,
        rating: 4.5,
        sqft: 450,
        beds: 2,
        baths: 1,
        image: three
    },
    {
        id: 'pro__4',
        name: "456 Pine St, Random City, USA",
        price: 2000,
        rating: 5,
        sqft: 600,
        beds: 4,
        baths: 3,
        image: foure
    },
    {
        id: 'pro__5',
        name: "101 Birch St, Major City, USA",
        price: 2200,
        rating: 4.8,
        sqft: 700,
        beds: 5,
        baths: 4,
        image: five
    },
    {
        id: 'pro__6',
        name: "202 Elm St, Cool City, USA",
        price: 1400,
        rating: 4.2,
        sqft: 350,
        beds: 1,
        baths: 1,
        image: six
    },
    {
        id: 'pro__7',
        name: "303 Cedar Ave, Nice City, USA",
        price: 1700,
        rating: 4.6,
        sqft: 500,
        beds: 3,
        baths: 2,
        image: seven
    },
    {
        id: 'pro__8',
        name: "404 Maple Dr, Lovely City, USA",
        price: 1900,
        rating: 4.7,
        sqft: 550,
        beds: 3,
        baths: 2,
        image: eight
    },
    {
        id: 'pro__9',
        name: "505 Oak Blvd, Charming City, USA",
        price: 2100,
        rating: 4.9,
        sqft: 650,
        beds: 4,
        baths: 3,
        image: nine
    },
    {
        id: 'pro__10',
        name: "606 Pine Lane, Great City, USA",
        price: 1600,
        rating: 4.3,
        sqft: 400,
        beds: 2,
        baths: 2,
        image: ten
    }
];


export function Features() {
    return (
        <div className="container">
            <p className="text-4xl text-center mb-2">Features Properties</p>
            <p className="text-center text-muted-foreground">Explore our exquisite featured properties showcasing unparalleled charm, luxurios amenities, and prime locations</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {
                    propertiesList.map((property) => (
                        <PropertyCard key={property.id} {...property} />

                    ))
                }
            </div>
        </div>
    )
}