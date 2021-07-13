var config = {};

config.supportedCars = [
    { brand: 'Tesla', name:'Tesla Model 3', vehicle_type: 'tesla-m3', ask_wltp: false, },
    { brand: 'Tesla', name:'Tesla Model Y', vehicle_type: 'tesla-m3', ask_wltp: false },
    { brand: 'Hyundai', name:'Hyundai Kona', vehicle_type: 'hyundai-kona', ask_wltp: true, wltp_options: [[39.2, 289, 'MY2018'], [64, 455, 'MY2018'], [39.2, 305, 'MY2021'], [64, 484, 'MY2021']] },
    { brand: 'Hyundai', name:'IONIQ5', vehicle_type: 'hyundai-ioniq5', ask_wltp: true, wltp_options: [[58, 384, '2WD MY2021'], [58, 360, '4WD MY2021'], [72.6, 481, '2WD MY2021'], [72.6, 460, '4WD MY2021']] },
    { brand: 'VW', name:'VW id.3', vehicle_type: 'vw-id', ask_wltp: true, wltp_options: [[45, 352, 'Pure'], [58, 426, 'Pro'], [77, 513, 'Pro S']] },
    { brand: 'VW', name:'VW id.4', vehicle_type: 'vw-id', ask_wltp: true, wltp_options: [[52, 345, 'Pure'], [77, 508, 'Pro'], [77, 480, 'GTX']] },
    { brand: 'VW', name:'VW Golf 8 GTE', vehicle_type: 'vw-phev', ask_wltp: true, wltp_options: [[12.8, 62, 'MY2020']]  },
    { brand: 'Cupra', name:'Cupra Formentor PHEV', vehicle_type: 'vw-phev', ask_wltp: true, wltp_options: [[12.8, 55, 'MY2021']]  },
    { brand: 'Seat', name:'Seat Leon e-HYBRID', vehicle_type: 'vw-phev', ask_wltp: true, wltp_options: [[12.8, 64, 'MY2021']]  },
    { brand: 'Skoda', name:'Skoda Octavia iV PHEV 1.4 TSI', vehicle_type: 'vw-phev', ask_wltp: true, wltp_options: [[12.8, 50, 'MY2020']]  },
    { brand: 'Skoda', name:'Skoda Superb iV PHEV 1.4 TSI', vehicle_type: 'vw-phev', ask_wltp: true, wltp_options: [[12.8, 55, 'MY2020']]  },
]

module.exports = config;
