import { Component, Input } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"],
})
export class EventComponent {
  
  formData = {
    name: "",
    url: "",
  };

  onSubmit() {
    this.events.push({
      id: this.events.length,
      name: this.formData.name,
      image: this.formData.url,
    });
  }

  events: { id: number; name: string; image: string }[] = [
    {
      id: 1,
      name: "Voyage Allemagne",
      image:
        "https://st.depositphotos.com/1003723/3316/i/450/depositphotos_33167371-stock-photo-girl-on-the-wooden-jetty.jpg",
    },
    {
      id: 2,
      name: "Anniversaire Lousie",
      image: "https://www.tourmag.com/photo/art/grande/63046277-45546518.jpg",
    },
  ];
}
