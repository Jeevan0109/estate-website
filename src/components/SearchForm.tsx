'use client'
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"


function generatePriceValue() {
    let price = [];
    for (let i = 1; i <= 6; i++) {
        price.push(i * 100)
    }
    return price;
}

// create type 
type FormValues = {
    address: string;
    categories: string;
    minPrices: string;
    maxPrices: string;
}

export function SearchForm() {

    const form = useForm<FormValues>(
        {
            defaultValues: {
                // default values for address categoresi min price and max prices 
                address: "",
                categories: "",
                minPrices: "",
                maxPrices: ""
            }
        }
    )

    const prices = generatePriceValue();

    function formSubmitHandler(data: FormValues) {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmitHandler)} className="w-full p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-background rounded item-end">
                <FormField control={form.control} name="address" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Search by Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )
                }}
                />
                <FormField control={form.control} name="categories" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Categories</FormLabel>
                            <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">House</SelectItem>
                                        <SelectItem value="dark">Apartment</SelectItem>
                                        <SelectItem value="system">Office</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )
                }}
                />
                <FormField control={form.control} name="minPrices" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Min. Price</FormLabel>
                            <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Min. Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            prices.map((price) => (
                                                <SelectItem key={price} value={price.toString()}>{price}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )
                }}
                />
                <FormField control={form.control} name="maxPrices" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Max. Price</FormLabel>
                            <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Max. Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            prices.map((price) => (
                                                <SelectItem key={price} value={price.toString()} >{price}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )
                }}
                />
                {/* Submit button  */}
                <Button className="col-start-[1] col-end-[-1]">Search</Button>
            </form>
        </Form>
    )
}