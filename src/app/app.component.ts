import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentPage = 0;
    upToFive(index: number) {
        return Math.abs(this.currentPage - index) < 5;
    }
    images = [
        {
            title: 'At the Beach',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'In the City',
            url: 'https://images.unsplash.com/photo-1609945652850-3411bc6dc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHklMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Home',
            url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Mountain',
            url: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At the Beach',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'In the City',
            url: 'https://images.unsplash.com/photo-1609945652850-3411bc6dc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHklMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Home',
            url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Mountain',
            url: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At the Beach',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'In the City',
            url: 'https://images.unsplash.com/photo-1609945652850-3411bc6dc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHklMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Home',
            url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Mountain',
            url: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At the Beach',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'In the City',
            url: 'https://images.unsplash.com/photo-1609945652850-3411bc6dc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHklMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Home',
            url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Mountain',
            url: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At the Beach',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'In the City',
            url: 'https://images.unsplash.com/photo-1609945652850-3411bc6dc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHklMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Home',
            url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            title: 'At Mountain',
            url: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
    ];
}
