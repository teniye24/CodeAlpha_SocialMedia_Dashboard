$(document).ready(function() {
    const menu = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");

    menu.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        if(window.innerWidth <=768){
            sidebar.classList.remove('active');
        }
    });
    //navbar color change
   $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 50){
        $('.navbar').css('background', '#101545');
        $('.navbar').css('box-shadow', 'rgba(0,0,0,0.1) 0px 4px 12px');
    }
    else{
        $('.navbar').css('background', 'transparent');
        $('.navbar').css('box-shadow', 'none');
    }
    });

    //line chart
    var options = {
        series:[{
            name: 'series1',
            data: [101, 64, 78, 191, 42, 109, 100, 230]
        },{
            name: 'series2',
            data: [41, 32, 85, 42, 124, 52, 71, 120]
        }],
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1a73e8' , '#e91e63'],
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
        },
        tooltip: {
            theme: 'dark'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
        ],
            labels: {
                style: {
                    colors: 'white'
                }
            },
          },   
        yaxis: {
            labels: {
                style: {
                    colors: 'white'
                }
            }
        },
        legend: {
            labels: {
                colors: 'white'
            },
        },
            
    };
    var chart = new ApexCharts(document.querySelector("#chLine"), options);
    chart.render();
    //doughnut chart
var options = {
        series: [44, 55, 17, 34],
        labels: ['Impression', 'Followers', 'Engagement', 'Links',],
        chart: {
            type: 'donut',
            height:250,
            plotOptions: {
                pie: {
                    expandOnClick: true
                },
            },
        },
        colors: ['#3a86ff' , '#3d348b', '#ff006e', '#ffbe0b'],
        legend: {
                show: false       
        }
    };
    var chart = new ApexCharts(document.querySelector('#dougnut-chart'), options);
    chart.render();
})