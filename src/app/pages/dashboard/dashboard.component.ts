import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  dashboardData = [
    {
      ID: 1,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com',
      OrderIndex:0
    },
    {
      ID: 2,
      CompanyName: 'K&S Music',
      Address: '1000 Nicllet Mall',
      City: 'Minneapolis',
      Zipcode: 55403,
      Phone: '(612) 304-6073',
      Fax: '(612) 304-6074',
      Website: 'http://www.nowebsitemusic.com',
      OrderIndex:1
    },
    {
      ID: 3,
      CompanyName: "Tom's Club",
      Address: '999 Lake Drive',
      City: 'Issaquah',
      Zipcode: 98027,
      Phone: '(800) 955-2292',
      Fax: '(800) 955-2293',
      Website: 'http://www.nowebsitetomsclub.com',
      OrderIndex:2
    },
    {
      ID: 4,
      CompanyName: 'E-Mart',
      Address: '3333 Beverly Rd',
      City: 'Hoffman Estates',
      Zipcode: 60179,
      Phone: '(847) 286-2500',
      Fax: '(847) 286-2501',
      Website: 'http://www.nowebsiteemart.com',
      OrderIndex:3
    },
    {
      ID: 5,
      CompanyName: 'Walters',
      Address: '200 Wilmot Rd',
      City: 'Deerfield',
      Zipcode: 60015,
      Phone: '(847) 940-2500',
      Fax: '(847) 940-2501',
      Website: 'http://www.nowebsitewalters.com',
      OrderIndex:4
    },
    {
      ID: 6,
      CompanyName: 'StereoShack',
      Address: '400 Commerce S',
      City: 'Fort Worth',
      Zipcode: 76102,
      Phone: '(817) 820-0741',
      Fax: '(817) 820-0742',
      Website: 'http://www.nowebsiteshack.com',
      OrderIndex:5
    },
    {
      ID: 7,
      CompanyName: 'Circuit Town',
      Address: '2200 Kensington Court',
      City: 'Oak Brook',
      Zipcode: 60523,
      Phone: '(800) 955-2929',
      Fax: '(800) 955-9392',
      Website: 'http://www.nowebsitecircuittown.com',
      OrderIndex:6
    },
    {
      ID: 8,
      CompanyName: 'Premier Buy',
      Address: '7601 Penn Avenue South',
      City: 'Richfield',

      Zipcode: 55423,
      Phone: '(612) 291-1000',
      Fax: '(612) 291-2001',
      Website: 'http://www.nowebsitepremierbuy.com',
      OrderIndex:7
    },
    {
      ID: 9,
      CompanyName: 'ElectrixMax',
      Address: '263 Shuman Blvd',
      City: 'Naperville',

      Zipcode: 60563,
      Phone: '(630) 438-7800',
      Fax: '(630) 438-7801',
      Website: 'http://www.nowebsiteelectrixmax.com',
      OrderIndex:8
    },
    {
      ID: 10,
      CompanyName: 'Video Emporium',
      Address: '1201 Elm Street',
      City: 'Dallas',

      Zipcode: 75270,
      Phone: '(214) 854-3000',
      Fax: '(214) 854-3001',
      Website: 'http://www.nowebsitevideoemporium.com',
      OrderIndex:9
    },
    {
      ID: 11,
      CompanyName: 'Screen Shop',
      Address: '1000 Lowes Blvd',
      City: 'Mooresville',

      Zipcode: 28117,
      Phone: '(800) 445-6937',
      Fax: '(800) 445-6938',
      Website: 'http://www.nowebsitescreenshop.com',
      OrderIndex:10
    },
    {
      ID: 12,
      CompanyName: 'Braeburn',
      Address: '1 Infinite Loop',
      City: 'Cupertino',

      Zipcode: 95014,
      Phone: '(408) 996-1010',
      Fax: '(408) 996-1012',
      Website: 'http://www.nowebsitebraeburn.com',
      OrderIndex:11
    },
    {
      ID: 13,
      CompanyName: 'PriceCo',
      Address: '30 Hunter Lane',
      City: 'Camp Hill',

      Zipcode: 17011,
      Phone: '(717) 761-2633',
      Fax: '(717) 761-2334',
      Website: 'http://www.nowebsitepriceco.com',
      OrderIndex:12
    },
    {
      ID: 14,
      CompanyName: 'Ultimate Gadget',
      Address: '1557 Watson Blvd',
      City: 'Warner Robbins',

      Zipcode: 31093,
      Phone: '(995) 623-6785',
      Fax: '(995) 623-6786',
      Website: 'http://www.nowebsiteultimategadget.com',
      OrderIndex:13
    },
    {
      ID: 15,
      CompanyName: 'Electronics Depot',
      Address: '2455 Paces Ferry Road NW',
      City: 'Atlanta',

      Zipcode: 30339,
      Phone: '(800) 595-3232',
      Fax: '(800) 595-3231',
      Website: 'http://www.nowebsitedepot.com',
      OrderIndex:14
    },
    {
      ID: 16,
      CompanyName: 'EZ Stop',
      Address: '618 Michillinda Ave.',
      City: 'Arcadia',

      Zipcode: 91007,
      Phone: '(626) 265-8632',
      Fax: '(626) 265-8633',
      Website: 'http://www.nowebsiteezstop.com',
      OrderIndex:15
    },
    {
      ID: 17,
      CompanyName: 'Clicker',
      Address: '1100 W. Artesia Blvd.',
      City: 'Compton',

      Zipcode: 90220,
      Phone: '(310) 884-9000',
      Fax: '(310) 884-9001',
      Website: 'http://www.nowebsiteclicker.com',
      OrderIndex:16
    },
    {
      ID: 18,
      CompanyName: 'Store of America',
      Address: '2401 Utah Ave. South',
      City: 'Seattle',

      Zipcode: 98134,
      Phone: '(206) 447-1575',
      Fax: '(206) 447-1576',
      Website: 'http://www.nowebsiteamerica.com',
      OrderIndex:17
    },
    {
      ID: 19,
      CompanyName: 'Zone Toys',
      Address: '1945 S Cienega Boulevard',
      City: 'Los Angeles',

      Zipcode: 90034,
      Phone: '(310) 237-5642',
      Fax: '(310) 237-5643',
      Website: 'http://www.nowebsitezonetoys.com',
      OrderIndex:18
    },
    {
      ID: 20,
      CompanyName: 'ACME',
      Address: '2525 E El Segundo Blvd',
      City: 'El Segundo',

      Zipcode: 90245,
      Phone: '(310) 536-0611',
      Fax: '(310) 536-0612',
      Website: 'http://www.nowebsiteacme.com',
      OrderIndex:19
    },
  ];

  constructor(private dashboardService: DashboardService) {}
}
