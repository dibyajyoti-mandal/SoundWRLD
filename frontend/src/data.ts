type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
};

type Products = Product[]

export const items: Products = [
    {
        id: 1,
        title: "Sony WH-1000X",
        desc: "Industry-leading noise cancellation and exceptional sound quality",
        img: "/sonywh.png",
        price: 349,

    },
    {
        id: 2,
        title: "Bose QC 45",
        desc: "Powerful noise cancellation and comfortable fit",
        img: "/boseqc.png",
        price: 329,

    },
    {
        id: 3,
        title: "Sennheiser Momentum 4",
        desc: "Exceptional sound quality and premium design",
        img: "/cat1.png",
        price: 399,

    },
    {
        id: 4,
        title: "Beyerdynamic DT 700",
        desc: "Studio-quality sound for professionals",
        img: "/cat2.png",
        price: 279,

    },
    {
        id: 5,
        title: "ATH-M50xBT2",
        desc: "Wireless freedom and studio-quality sound",
        img: "/cat1.png",
        price: 199,

    },
];

export const item: Product = {
    id: 4,
    title: "Beyerdynamic DT 700",
    desc: "Studio-quality sound for professionals",
    img: "/cat2.png",
    price: 279

}

type Category = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
}[];

export const category: Category = [
    {
        id: 1,
        title: "Earphones",
        desc: "In ear sound experience",
        img: "/cat1.png"
    },
    {
        id: 2,
        title: "Headphones",
        desc: "Premium over-ear devices",
        img: "/cat2.png"
    }, {
        id: 1,
        title: "Speakers",
        desc: "Best loud speakers in league",
        img: "/cat3.png"
    },
]


