Vendorizing external libraries

This project uses several libraries loaded from CDNs. For GitHub Pages and to avoid tracking/storage-blocking and to simplify CSP, keep local copies in `vendor/` and reference them locally.

Files to download (place under `vendor/`):

- https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css -> vendor/bootstrap.min.css
- https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js -> vendor/bootstrap.bundle.min.js
- https://unpkg.com/leaflet@1.9.4/dist/leaflet.css -> vendor/leaflet.css
- https://unpkg.com/leaflet@1.9.4/dist/leaflet.js -> vendor/leaflet.js
- https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css -> vendor/leaflet.draw.css
- https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js -> vendor/leaflet.draw.js
- https://unpkg.com/shpjs@3.4.3/dist/shp.min.js -> vendor/shp.min.js
- https://cdnjs.cloudflare.com/ajax/libs/geostats/1.7.0/geostats.min.js -> vendor/geostats.min.js
- https://unpkg.com/leaflet-image@0.4.0/leaflet-image.js -> vendor/leaflet-image.js
- https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js -> vendor/html2canvas.min.js
- https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js -> vendor/jspdf.umd.min.js
- https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js -> vendor/papaparse.min.js

Download commands (Linux/macOS with curl):

```bash
mkdir -p vendor
curl -L -o vendor/bootstrap.min.css "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
curl -L -o vendor/bootstrap.bundle.min.js "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
curl -L -o vendor/leaflet.css "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
curl -L -o vendor/leaflet.js "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
curl -L -o vendor/leaflet.draw.css "https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"
curl -L -o vendor/leaflet.draw.js "https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"
curl -L -o vendor/shp.min.js "https://unpkg.com/shpjs@3.4.3/dist/shp.min.js"
curl -L -o vendor/geostats.min.js "https://cdnjs.cloudflare.com/ajax/libs/geostats/1.7.0/geostats.min.js"
curl -L -o vendor/leaflet-image.js "https://unpkg.com/leaflet-image@0.4.0/leaflet-image.js"
curl -L -o vendor/html2canvas.min.js "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
curl -L -o vendor/jspdf.umd.min.js "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
curl -L -o vendor/papaparse.min.js "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"
```

Windows PowerShell commands:

```powershell
mkdir vendor
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" -OutFile vendor\bootstrap.min.css
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" -OutFile vendor\bootstrap.bundle.min.js
Invoke-WebRequest -Uri "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" -OutFile vendor\leaflet.css
Invoke-WebRequest -Uri "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" -OutFile vendor\leaflet.js
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" -OutFile vendor\leaflet.draw.css
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js" -OutFile vendor\leaflet.draw.js
Invoke-WebRequest -Uri "https://unpkg.com/shpjs@3.4.3/dist/shp.min.js" -OutFile vendor\shp.min.js
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/geostats/1.7.0/geostats.min.js" -OutFile vendor\geostats.min.js
Invoke-WebRequest -Uri "https://unpkg.com/leaflet-image@0.4.0/leaflet-image.js" -OutFile vendor\leaflet-image.js
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" -OutFile vendor\html2canvas.min.js
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" -OutFile vendor\jspdf.umd.min.js
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js" -OutFile vendor\papaparse.min.js
```

After downloading, commit the `vendor/` directory to your Git repository and push to GitHub. Your `index.html` already references these local files.

Caveats
- Some libraries may include additional assets (images/fonts). Verify the library docs and copy any required additional files (e.g., Leaflet images).
- Keep license notices when bundling vendor files.
- After vendoring, test the app and check DevTools Console for CSP or resource errors.
