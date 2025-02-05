import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { iProduct } from './item.model';
import { CommonModule } from '@angular/common';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Online store awdawd';
  showOptions = false;
  link = "";
  imgIndex = [0,0,0,0,0,0,0,0,0,0];

  nextImg(id: number, event: Event) {
    event.preventDefault();
    this.imgIndex[id] = (this.imgIndex[id] + 1) % 3;
  }

  prevImg(id: number, event: Event){
    event.preventDefault();
    this.imgIndex[id] = (this.imgIndex[id] + 2) % 3;
  }

  showShareOptions(link:string, event: Event) {
    this.link = link;
    event.preventDefault();
    this.showOptions = !this.showOptions;
  }

  closeOptions(event: MouseEvent){
    event.preventDefault();
    this.showOptions = false;
  }

  shareTelegram(event: Event) {
    event.preventDefault();
    const url = `https://t.me/share/url?url=${this.link}`;
    window.open(url);
  }

  shareWhatsApp(event: Event) {
    event.preventDefault();
    const url = `https://wa.me/?text=${this.link}`;
    window.open(url);
  }

  ListOfProducts: iProduct[] = [
    {
      id: 0,
      name: "Apple iPhone 13 128Gb Black",
      price: 274948,
      description: "Apple iPhone 13 128Gb в черном цвете — мощный смартфон с улучшенной камерой, чипом A15 Bionic и поддержкой 5G. Отличается стильным дизайном и высокой производительностью для любых задач.",
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium"
      ],
      rating: 4.95
    },
    {
      id: 1,
      name: "Xiaomi Redmi 13C 8GB 256GB Черный",
      price: 79990,
      description: "Xiaomi Redmi 13C с 8GB оперативной памяти и 256GB встроенной памяти. Устройство оснащено мощной камерой и производительным процессором для стабильной работы.",
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium"
      ],
      rating: 4.8
    },
    {
      id: 2,
      name: "Apple iPhone 16 Pro Max 256GB Золотистый",
      price: 359948,
      description: "Apple iPhone 16 Pro Max 256GB в золотистом цвете — флагман с улучшенной камерой, чипом A16 Bionic и поддержкой 5G. Идеален для тех, кто ценит качество и стиль.",
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium"
      ],
      rating: 4.9
    },
    {
      id: 3,
      name: "Apple iPhone 16 Pro Max 256GB Черный",
      price: 359948,
      description: "Apple iPhone 16 Pro Max 256GB черного цвета с улучшенной камерой и процессором A16 Bionic, отличающийся высоким качеством и производительностью.",
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium"
      ],
      rating: 4.9
    },
    {
      id: 4,
      name: "Apple iPhone 16 Pro 256GB Черный",
      price: 319948,
      description: "Apple iPhone 16 Pro 256GB черного цвета с потрясающим экраном и высокой производительностью, который отвечает всем современным требованиям.",
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h16/hd9/87295483478046.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4f/h94/87295483510814.png?format=gallery-medium"
      ],
      rating: 4.8
    },
    {
      id: 5,
      name: "Samsung Galaxy A35 5G 8GB 128GB Темно-синий",
      price: 109990,
      description: "Samsung Galaxy A35 5G с 8GB оперативной памяти и 128GB встроенной памяти. Смартфон с поддержкой 5G и отличной камерой для любых задач.",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he5/h1d/85429009350686.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hc5/h86/85429009416222.png?format=gallery-medium"
      ],
      rating: 4.7
    },
    {
      id: 6,
      name: "Apple iPhone 13 128GB Синий",
      price: 274948,
      description: "Apple iPhone 13 128GB в синем цвете — это идеальный выбор для тех, кто ценит качество, стиль и высокую производительность.",
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium"
      ],
      rating: 4.9
    },
    {
      id: 7,
      name: "Apple iPhone 16 Pro Max 256GB Серебристый",
      price: 359948,
      description: "Apple iPhone 16 Pro Max 256GB в серебристом цвете с мощным процессором и улучшенной камерой, предлагающий высочайшую производительность и стиль.",
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/haa/hc9/87295492947998.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/haa/hc9/87295492947998.png?format=gallery-medium"
      ],
      rating: 4.8
    },
    {
      id: 8,
      name: "Samsung Galaxy A55 5G 8GB 256GB Темно-синий",
      price: 139990,
      description: "Samsung Galaxy A55 5G с 8GB оперативной памяти и 256GB встроенной памяти. Отличный выбор для тех, кто ищет баланс между производительностью и ценой.",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-medium"
      ],
      rating: 4.8
    },
    {
      id: 9,
      name: "Apple iPhone 13 128GB Зеленый",
      price: 274948,
      description: "Apple iPhone 13 128GB зеленого цвета — мощный смартфон с улучшенной камерой, чипом A15 Bionic и поддержкой 5G. Отличается стильным дизайном и высокой производительностью для любых задач.",
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h51/h3e/64255726747678.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hdd/hf3/64255730286622.jpg?format=gallery-medium"
      ],
      rating: 4.9
    }
  ];
  
}