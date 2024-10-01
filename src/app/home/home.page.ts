import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  
  constructor(private router: Router) { } // Injeksi Router

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    // Data untuk chart
    const data = {
      labels: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'], // Time in ms
      datasets: [{
        label: 'EMG Amplitude (mV)',
        data: [0.5, 1.2, 0.9, 1.5, 0.8, 1.1, 0.7, 1.4, 0.6, 1.0, 1.3], // Example data points
        borderColor: 'rgba(255, 255, 255, 1)',  // Ubah garis menjadi putih
        backgroundColor: 'rgba(255, 255, 255, 0.2)',  // Ubah background menjadi semi-transparan putih
        fill: true,
        tension: 0.4, // Smooth curve
      }]
    };

    // Konfigurasi chart
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time (ms)',
              color: '#ffffff', // Ubah warna title sumbu X menjadi putih
            },
            ticks: {
              color: '#ffffff', // Ubah warna label sumbu X menjadi putih
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)', // Ubah warna gridline sumbu X
            },
          },
          y: {
            title: {
              display: true,
              text: 'EMG Amplitude (mV)',
              color: '#ffffff', // Ubah warna title sumbu Y menjadi putih
            },
            ticks: {
              color: '#ffffff', // Ubah warna label sumbu Y menjadi putih
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)', // Ubah warna gridline sumbu Y
            },
            suggestedMin: 0,
            suggestedMax: 2
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff' // Ubah warna label legenda menjadi putih
            }
          }
        }
      }
    };

    // Inisialisasi chart setelah view siap
    const ctx = document.getElementById('emgChart') as HTMLCanvasElement;
    if (ctx) {
      new (window as any).Chart(ctx.getContext('2d')!, config); // Menggunakan Chart.js dari CDN
    } else {
      console.error('Canvas element not found');
    }
  }

  navigateToDiagnose() {
    // Arahkan ke halaman diagnose
    this.router.navigate(['/diagnose']);
  }
}