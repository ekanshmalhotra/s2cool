// ===== METRIC CONFIGURATION =====
const METRIC_CONFIG = {
    temp: {
        min: 15,
        max: 35,
        unit: "°",
        colors: ["#3b82f6", "#10b981", "#fbbf24", "#ef4444"]
    },
    humidity: {
        min: 20,
        max: 100,
        unit: "%",
        colors: ["#b45309", "#fde68a", "#7dd3fc", "#1e3a8a"]
    },
    windSpeed: {
        min: 0,
        max: 40,
        unit: " km/h",
        colors: ["#f1f5f9", "#22d3ee", "#6366f1", "#4338ca"]
    },
    dewPoint: {
        min: 0,
        max: 30,
        unit: "°",
        colors: ["#ecfdf5", "#10b981", "#059669", "#064e3b"]
    }
};

const METRIC_LABELS = {
    temp: "AMBIENT TEMPERATURE",
    humidity: "RELATIVE HUMIDITY",
    windSpeed: "WIND VELOCITY",
    dewPoint: "DEW POINT TEMPERATURE"
};

// ===== PAKISTAN CITIES DATA =====
const PAKISTAN_CITIES = [
    {
        city: "PESHAWAR",
        lat: 34.0151,
        lng: 71.5249,
        temp: 23.6,
        feelsLike: 23.6,
        minTemp: 21.5,
        maxTemp: 25.2,
        humidity: 40,
        dewPoint: 11,
        pressure: 1012,
        cloudCover: 5,
        windSpeed: 10,
        windDir: "NW",
        windDirDeg: 315,
        gustSpeed: 14,
        tempMean: 22.8,
        tempStd: 0.35,
        tempRange: "10.5° - 42.1°C",
        windMean: 8.2,
        windStd: 0.52,
        humidityMean: 45.2,
        humidityStd: 2.1,
        condition: "Sunny",
        trend: [20, 21, 22, 23, 24, 23, 23],
        forecast: []
    },
    {
        city: "ISLAMABAD",
        lat: 33.6844,
        lng: 73.0479,
        temp: 23.2,
        feelsLike: 23.2,
        minTemp: 20.2,
        maxTemp: 24.8,
        humidity: 45,
        dewPoint: 10,
        pressure: 1010,
        cloudCover: 0,
        windSpeed: 12,
        windDir: "N",
        windDirDeg: 0,
        gustSpeed: 16,
        tempMean: 22.1,
        tempStd: 0.45,
        tempRange: "8.2° - 44.5°C",
        windMean: 9.1,
        windStd: 0.48,
        humidityMean: 50.1,
        humidityStd: 1.8,
        condition: "Clear",
        trend: [21, 22, 23, 22, 21, 23, 24],
        forecast: []
    },
    {
        city: "LAHORE",
        lat: 31.5204,
        lng: 74.3587,
        temp: 25.7,
        feelsLike: 25.7,
        minTemp: 23.8,
        maxTemp: 28.1,
        humidity: 52,
        dewPoint: 14,
        pressure: 1008,
        cloudCover: 10,
        windSpeed: 8,
        windDir: "W",
        windDirDeg: 270,
        gustSpeed: 12,
        tempMean: 26.2,
        tempStd: 0.41,
        tempRange: "2.8° - 47.8°C",
        windMean: 6.7,
        windStd: 0.43,
        humidityMean: 57.8,
        humidityStd: 1.73,
        condition: "Clear",
        trend: [22, 23, 25, 24, 26, 25, 24],
        forecast: []
    },
    {
        city: "MULTAN",
        lat: 30.1575,
        lng: 71.5249,
        temp: 27.2,
        feelsLike: 27.2,
        minTemp: 24.9,
        maxTemp: 28.9,
        humidity: 36,
        dewPoint: 10.6,
        pressure: 1003,
        cloudCover: 0,
        windSpeed: 7,
        windDir: "NE",
        windDirDeg: 55,
        gustSpeed: 10.5,
        tempMean: 26.2,
        tempStd: 0.41,
        tempRange: "2.8° - 47.8°C",
        windMean: 6.7,
        windStd: 0.43,
        humidityMean: 57.8,
        humidityStd: 1.73,
        condition: "Hot",
        trend: [24, 25, 26, 27, 26, 25, 26],
        forecast: []
    },
    {
        city: "QUETTA",
        lat: 30.1798,
        lng: 66.9750,
        temp: 18.0,
        feelsLike: 18.0,
        minTemp: 14.5,
        maxTemp: 19.8,
        humidity: 25,
        dewPoint: 5,
        pressure: 1015,
        cloudCover: 0,
        windSpeed: 15,
        windDir: "W",
        windDirDeg: 270,
        gustSpeed: 20,
        tempMean: 18.5,
        tempStd: 0.62,
        tempRange: "-5.2° - 38.4°C",
        windMean: 12.4,
        windStd: 0.85,
        humidityMean: 30.2,
        humidityStd: 2.4,
        condition: "Cold",
        trend: [15, 16, 18, 19, 17, 18, 19],
        forecast: []
    },
    {
        city: "RAHIM YAR KHAN",
        lat: 28.4195,
        lng: 70.3025,
        temp: 28.1,
        feelsLike: 28.1,
        minTemp: 25.4,
        maxTemp: 30.2,
        humidity: 38,
        dewPoint: 16,
        pressure: 1005,
        cloudCover: 0,
        windSpeed: 12,
        windDir: "S",
        windDirDeg: 180,
        gustSpeed: 18,
        tempMean: 28.5,
        tempStd: 0.38,
        tempRange: "12.4° - 50.1°C",
        windMean: 10.2,
        windStd: 0.55,
        humidityMean: 42.1,
        humidityStd: 1.9,
        condition: "Clear",
        trend: [26, 27, 28, 27, 26, 28, 27],
        forecast: []
    },
    {
        city: "LARKANA",
        lat: 27.5590,
        lng: 68.2045,
        temp: 28.1,
        feelsLike: 28.1,
        minTemp: 25.1,
        maxTemp: 29.8,
        humidity: 42,
        dewPoint: 17,
        pressure: 1004,
        cloudCover: 0,
        windSpeed: 10,
        windDir: "SW",
        windDirDeg: 225,
        gustSpeed: 15,
        tempMean: 28.1,
        tempStd: 0.42,
        tempRange: "11.8° - 49.5°C",
        windMean: 8.5,
        windStd: 0.61,
        humidityMean: 44.5,
        humidityStd: 2.2,
        condition: "Sunny",
        trend: [25, 26, 27, 28, 27, 26, 27],
        forecast: []
    },
    {
        city: "KARACHI",
        lat: 24.8607,
        lng: 67.0011,
        temp: 29.4,
        feelsLike: 29.4,
        minTemp: 24.5,
        maxTemp: 31.1,
        humidity: 78,
        dewPoint: 19,
        pressure: 1007,
        cloudCover: 20,
        windSpeed: 22,
        windDir: "W",
        windDirDeg: 270,
        gustSpeed: 30,
        tempMean: 27.4,
        tempStd: 0.32,
        tempRange: "12.5° - 42.8°C",
        windMean: 18.2,
        windStd: 0.95,
        humidityMean: 72.4,
        humidityStd: 1.5,
        condition: "Humid",
        trend: [26, 27, 26, 28, 27, 26, 27],
        forecast: []
    }
];

// ===== COLOR UTILITIES =====
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
}

function getMetricColor(metric, value) {
    const config = METRIC_CONFIG[metric];
    const t = Math.min(1, Math.max(0, (value - config.min) / (config.max - config.min)));

    const numColors = config.colors.length;
    if (t <= 0) return config.colors[0];
    if (t >= 1) return config.colors[numColors - 1];

    const scaledT = t * (numColors - 1);
    const index = Math.floor(scaledT);
    const factor = scaledT - index;

    const c1 = hexToRgb(config.colors[index]);
    const c2 = hexToRgb(config.colors[index + 1]);

    const r = c1.r + (c2.r - c1.r) * factor;
    const g = c1.g + (c2.g - c1.g) * factor;
    const b = c1.b + (c2.b - c1.b) * factor;

    return rgbToHex(r, g, b);
}

// ===== APP STATE =====
const appState = {
    selectedCity: PAKISTAN_CITIES[0],
    metric: 'temp',
    isDarkMode: false
};

// ===== MAP MANAGEMENT =====
let map = null;
const markersRef = {};
const initialCenter = [30.3753, 69.3451];
const initialZoom = 5.5;

function initializeMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found!');
        return;
    }

    console.log('Map container found:', mapContainer);
    console.log('Map container dimensions:', mapContainer.offsetWidth, 'x', mapContainer.offsetHeight);

    if (!window.L) {
        console.error('Leaflet library not loaded!');
        return;
    }

    try {
        map = window.L.map(mapContainer, {
            zoomControl: false,
            attributionControl: false,
            scrollWheelZoom: true,
            doubleClickZoom: true,
        }).setView(initialCenter, initialZoom);

        console.log('Map initialized successfully');

        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
        }).addTo(map);

        console.log('Tile layer added');

        // Handle popup close using proper Leaflet event
        map.on('popupclose', () => {
            // Don't automatically deselect, just update UI
            updateUI();
        });

        createMarkers();
        console.log('Markers created');
    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

function createMarkerIcon(city, isSelected = false) {
    const metricValue = city[appState.metric];
    const markerColor = getMetricColor(appState.metric, metricValue);

    const html = `
        <div style="display: flex; flex-direction: column; align-items: center; font-family: 'Inter', sans-serif;">
            <div style="position: relative; display: flex; align-items: center; justify-content: center;">
                <div style="position: absolute; width: 48px; height: 48px; border-radius: 50%; border: 2px solid ${markerColor}40; ${isSelected ? 'animation: pulse 2s infinite;' : 'opacity: 0;'}"></div>
                <div style="position: absolute; width: 32px; height: 32px; border-radius: 50%; background-color: ${markerColor}15; animation: pulse 2s infinite;"></div>
                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; background-color: ${markerColor}; box-shadow: 0 0 20px ${markerColor}80; transform: scale(${isSelected ? 1.25 : 1}); transition: all 0.3s;"></div>
            </div>
            <div style="margin-top: 8px; text-align: center; pointer-events: none;">
                <div style="padding: 4px 8px; border-radius: 6px; background-color: rgba(255,255,255,0.9); backdrop-filter: blur(4px); border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; color: #1e293b; line-height: 1;">${city.city}</div>
                    <div style="font-size: 10px; font-weight: 900; color: ${markerColor}; line-height: 1;">${metricValue}${appState.metric === 'temp' ? '°' : appState.metric === 'humidity' ? '%' : ''}</div>
                </div>
            </div>
        </div>
    `;

    return window.L.divIcon({
        className: 'custom-city-marker',
        html: html,
        iconSize: [80, 80],
        iconAnchor: [40, 40]
    });
}

function generatePopupHtml(data) {
    return `
        <div style="padding: 24px; color: #1e293b; font-family: 'Inter', sans-serif; font-size: 14px;">
            <div style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: #4f46e5;"></span>
                    <h3 style="font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #4f46e5; margin: 0;">${data.city}</h3>
                </div>
                <p style="font-size: 10px; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">Atmospheric Research Station</p>
            </div>

            <section style="margin-bottom: 24px;">
                <h4 style="font-size: 9px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Temperature Statistics</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="font-size: 8px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Current</p>
                        <p style="font-size: 18px; font-weight: 900; color: #4f46e5; margin: 0;">${data.temp}°C</p>
                    </div>
                    <div>
                        <p style="font-size: 8px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Feels Like</p>
                        <p style="font-size: 18px; font-weight: 900; color: #1e293b; margin: 0;">${data.feelsLike}°C</p>
                    </div>
                    <div>
                        <p style="font-size: 8px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Min Today</p>
                        <p style="font-size: 14px; font-weight: 700; color: #3b82f6; margin: 0;">${data.minTemp}°C</p>
                    </div>
                    <div>
                        <p style="font-size: 8px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Max Today</p>
                        <p style="font-size: 14px; font-weight: 700; color: #ee4444; margin: 0;">${data.maxTemp}°C</p>
                    </div>
                </div>
            </section>

            <section style="background: #f8fafc; padding: 16px; border-radius: 16px; border: 1px solid #e2e8f0;">
                <h4 style="font-size: 9px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Atmospheric Conditions</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 8px; font-weight: 700; color: #64748b; text-transform: uppercase;">Humidity</span>
                        <span style="font-size: 10px; font-weight: 900;">${data.humidity}%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 8px; font-weight: 700; color: #64748b; text-transform: uppercase;">Dew Point</span>
                        <span style="font-size: 10px; font-weight: 900;">${data.dewPoint}°C</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 8px; font-weight: 700; color: #64748b; text-transform: uppercase;">Pressure</span>
                        <span style="font-size: 10px; font-weight: 900;">${data.pressure} hPa</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 8px; font-weight: 700; color: #64748b; text-transform: uppercase;">Cloud Cover</span>
                        <span style="font-size: 10px; font-weight: 900;">${data.cloudCover}%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 8px; font-weight: 700; color: #64748b; text-transform: uppercase;">Wind Speed</span>
                        <span style="font-size: 10px; font-weight: 900;">${data.windSpeed} km/h</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 8px; font-weight: 700; color: #64748b; text-transform: uppercase;">Wind Dir</span>
                        <span style="font-size: 10px; font-weight: 900; color: #4f46e5;">${data.windDir} (${data.windDirDeg}°)</span>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function createMarkers() {
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef).forEach(marker => {
        // Remove all event listeners
        marker.off();
        map.removeLayer(marker);
    });
    Object.keys(markersRef).forEach(key => delete markersRef[key]);

    // Create new markers
    PAKISTAN_CITIES.forEach(city => {
        const isSelected = appState.selectedCity?.city === city.city;
        const marker = window.L.marker([city.lat, city.lng], {
            icon: createMarkerIcon(city, isSelected)
        }).addTo(map);

        // Bind popup with the city data
        marker.bindPopup(generatePopupHtml(city), {
            maxWidth: window.innerWidth < 640 ? 280 : 320,
            className: 'custom-weather-popup',
            offset: [0, -20],
            autoPan: true,
            closeButton: true
        });

        // Store city reference on marker for later access
        marker.cityData = city;

        marker.on('click', (e) => {
            console.log('Marker clicked:', city.city);
            // Prevent default Leaflet behavior
            if (e.originalEvent) {
                e.originalEvent.stopPropagation();
            }
            selectCity(city);
        });

        markersRef[city.city] = marker;
    });
}

function updateMarkers() {
    if (!map) return;

    PAKISTAN_CITIES.forEach(city => {
        const marker = markersRef[city.city];
        if (marker) {
            const isSelected = appState.selectedCity?.city === city.city;
            marker.setIcon(createMarkerIcon(city, isSelected));
        }
    });

    console.log('Markers updated, selected city:', appState.selectedCity?.city || null);
}

function selectCity(city) {
    console.log('selectCity called with:', city?.city || null);
    appState.selectedCity = city;

    if (city) {
        const marker = markersRef[city.city];
        if (marker) {
            console.log('Marker found for:', city.city);
            
            // Close any open popups first
            map.closePopup();
            
            // Fly to the city
            map.flyTo([city.lat, city.lng], window.innerWidth < 640 ? 6.5 : 7, { duration: 1200 });
            
            // Update popup content
            marker.setPopupContent(generatePopupHtml(city));
            
            // Open the popup
            setTimeout(() => {
                if (marker) {
                    console.log('Opening popup for:', city.city);
                    marker.openPopup();
                }
            }, 100);
        }
    } else {
        console.log('Closing popup');
        map.closePopup();
        map.flyTo(initialCenter, initialZoom, { duration: 1200 });
    }

    updateMarkers();
    updateSelectedCityInfo();
    updateUI();
}

function changeMetric(metric) {
    console.log('Metric changed to:', metric);
    appState.metric = metric;
    updateMetricScale();
    createMarkers();
    
    // If a city is selected and popup is open, update it
    if (appState.selectedCity) {
        const marker = markersRef[appState.selectedCity.city];
        if (marker) {
            console.log('Updating popup for selected city:', appState.selectedCity.city);
            marker.setPopupContent(generatePopupHtml(appState.selectedCity));
            // Reopen popup if it was open
            setTimeout(() => {
                if (marker && map && marker.isPopupOpen && marker.isPopupOpen()) {
                    console.log('Reopening popup after metric change');
                    marker.openPopup();
                }
            }, 100);
        }
    }
    
    updateSelectedCityInfo();
    updateUI();
}

// ===== UI UPDATES =====
function updateMetricScale() {
    const config = METRIC_CONFIG[appState.metric];
    const label = METRIC_LABELS[appState.metric];

    const scaleMetricLabel = document.getElementById('scaleMetricLabel');
    const scaleGradient = document.getElementById('scaleGradient');
    const scaleMax = document.getElementById('scaleMax');
    const scaleMin = document.getElementById('scaleMin');

    if (scaleMetricLabel) scaleMetricLabel.textContent = label;
    if (scaleMax) scaleMax.textContent = config.max + config.unit;
    if (scaleMin) scaleMin.textContent = config.min + config.unit;

    if (scaleGradient) {
        scaleGradient.style.background = `linear-gradient(to top, ${config.colors.join(', ')})`;
    }
}

function updateUI() {
    // Update metric buttons
    document.querySelectorAll('.metric-btn').forEach(btn => {
        const metric = btn.getAttribute('data-metric');
        if (metric === appState.metric) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('.mobile-metric-btn').forEach(btn => {
        const metric = btn.getAttribute('data-metric');
        if (metric === appState.metric) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateSelectedCityInfo() {
    const selectedCityNameEl = document.getElementById('selectedCityName');
    const selectedCityTempEl = document.getElementById('selectedCityTemp');

    if (appState.selectedCity) {
        selectedCityNameEl.textContent = appState.selectedCity.city;
        selectedCityTempEl.textContent = appState.selectedCity.temp + '°';
    } else {
        selectedCityNameEl.textContent = '—';
        selectedCityTempEl.textContent = '—°';
    }
}

function renderCitiesList() {
    const citiesList = document.getElementById('citiesList');
    citiesList.innerHTML = '';

    PAKISTAN_CITIES.forEach(city => {
        const item = document.createElement('button');
        item.className = 'city-list-item';
        if (appState.selectedCity?.city === city.city) {
            item.classList.add('active');
        }
        item.innerHTML = `
            <span class="city-list-name">${city.city}</span>
            <span class="city-list-temp">${city.temp}°</span>
        `;
        item.addEventListener('click', () => {
            selectCity(city);
            closeCitiesModal();
        });
        citiesList.appendChild(item);
    });
}

function openCitiesModal() {
    const modal = document.getElementById('citiesModal');
    modal.classList.add('active');
    renderCitiesList();
}

function closeCitiesModal() {
    const modal = document.getElementById('citiesModal');
    modal.classList.remove('active');
}

function filterCities(query) {
    const filtered = PAKISTAN_CITIES.filter(city => 
        city.city.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length > 0) {
        selectCity(filtered[0]);
    }
}

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.getElementById('currentTime').textContent = time;
    document.getElementById('mobileTimeText').textContent = time;
}

// ===== EVENT LISTENERS =====
function initializeApp() {
    console.log('initializeApp called');
    console.log('Leaflet available:', typeof window.L !== 'undefined');
    
    // Wait for Leaflet to be available
    if (typeof window.L === 'undefined') {
        console.log('Leaflet not loaded yet, retrying in 100ms...');
        setTimeout(initializeApp, 100);
        return;
    }

    console.log('Starting app initialization...');

    // Initialize map
    initializeMap();
    updateMetricScale();
    updateSelectedCityInfo();
    updateUI();
    updateTime();

    // Update time every minute
    setInterval(updateTime, 60000);

    // Metric button listeners (desktop)
    document.querySelectorAll('.metric-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const metric = btn.getAttribute('data-metric');
            changeMetric(metric);
        });
    });

    // Metric button listeners (mobile)
    document.querySelectorAll('.mobile-metric-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const metric = btn.getAttribute('data-metric');
            changeMetric(metric);
        });
    });

    // Center map button
    const centerMapBtn = document.getElementById('centerMapBtn');
    if (centerMapBtn) {
        centerMapBtn.addEventListener('click', () => {
            selectCity(null);
        });
    }

    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('Map refreshed');
            // Add rotating animation
            refreshBtn.style.animation = 'none';
            setTimeout(() => {
                refreshBtn.style.animation = 'spin 0.6s linear';
            }, 10);
            createMarkers();
        });
    }

    // Dark mode button
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            appState.isDarkMode = !appState.isDarkMode;
            console.log('Dark mode:', appState.isDarkMode);
        });
    }

    // Cities list button
    const citiesListBtn = document.getElementById('citiesListBtn');
    if (citiesListBtn) {
        citiesListBtn.addEventListener('click', openCitiesModal);
    }

    // Cities modal close button
    const citiesModalClose = document.getElementById('citiesModalClose');
    if (citiesModalClose) {
        citiesModalClose.addEventListener('click', closeCitiesModal);
    }

    // City search input
    const citySearch = document.getElementById('citySearch');
    if (citySearch) {
        citySearch.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                filterCities(query);
                citySearch.value = '';
            }
        });
    }

    // Modal backdrop click to close
    const citiesModal = document.getElementById('citiesModal');
    if (citiesModal) {
        citiesModal.addEventListener('click', (e) => {
            if (e.target === citiesModal) {
                closeCitiesModal();
            }
        });
    }

    console.log('App initialization complete!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    setTimeout(initializeApp, 100);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (map && appState.selectedCity) {
        const marker = markersRef[appState.selectedCity.city];
        if (marker && marker.isPopupOpen && marker.isPopupOpen()) {
            marker.setPopupContent(generatePopupHtml(appState.selectedCity));
        }
    }
});

// Add close button handler for popups
document.addEventListener('click', (e) => {
    if (e.target.closest('.leaflet-popup-close-button')) {
        // Small delay to let Leaflet close the popup
        setTimeout(() => {
            appState.selectedCity = null;
            updateUI();
        }, 10);
    }
}, true);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;
document.head.appendChild(style);
