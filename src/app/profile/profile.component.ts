import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { ProfileinfoComponent } from "./profileinfo/profileinfo.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, ProfileinfoComponent, SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
