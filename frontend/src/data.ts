type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[]



type Category = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
}[];

export const category: Category=[
    {
        id:1,
        title:"Earphones",
        desc:"In ear sound experience",
        img:"/cat1.png"
    },
    {
        id:2,
        title:"Headphones",
        desc:"Premium over-ear devices",
        img:"/cat2.png"
    },{
        id:1,
        title:"Speakers",
        desc:"Best loud speakers in league",
        img:"/cat3.png"
    },
]


