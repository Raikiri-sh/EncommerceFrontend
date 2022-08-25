export class Product {
    productItem(productItem: any) {
      throw new Error('Method not implemented.');
    }
    id: number;
    name: string;
    description: string;
    unitPrice: number;
    unitsInStock: number;
    imageUrl: string;
    merchantName: string;

    constructor(id: number, name: string, description ='', unitPrice=0, unitsInStock=0, merchantName:string,imageUrl='https://cdn.shopify.com/s/files/1/2718/4356/products/nike-dunk-low-retro-white-black-white-dd1391-100-sneaker_c843cffb-6250-4017-9fcc-6f847d770b67_600x.jpg?v=1660758125'){

        this.id=id,
        this.name=name,
        this.description=description,
        this.unitPrice=unitPrice,
        this.unitsInStock=unitsInStock
        this.imageUrl=imageUrl
        this.merchantName=merchantName

    }

}
