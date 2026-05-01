
## Standard Layout

This project follows a standard Go and frontend integration layout, designed to produce a self-contained binary.

### Frontend (`/web`)
The `web/` directory contains the complete frontend environment:
- **`src/`**: Source files including HTML, CSS, JavaScript, and React components.
- **`dist/`**: Compiled, minified, and gzipped production assets.
- **`package.json` & `vite.config.js`**: Frontend dependency management and bundling.
- **`embed.go`**: Defines the `web` Go package and uses `//go:embed dist` to include the compiled assets in the binary via the `Assets` variable.

### Backend
- **Root Directory**: The core Go application logic resides in the root of the project.
- **Entry Point (`/cmd`)**: The application entry point is located in `cmd/example/main.go`.
- **Asset Integration**: The backend serves the bundled frontend by sub-mounting the `dist` directory from the embedded filesystem:
  ```go
  subFS, err := fs.Sub(web.Assets, "dist")
  ```

### Asset Generation
To bundle and optimize frontend assets (HTML, CSS, JavaScript) with minification and gzip compression:

    go generate ./web/

This creates production-ready assets in `public/dist/` with both compressed (.gz) and uncompressed versions.

## Run

    go run cmd/example/main.go -age-key age_key.txt -dbpath app.db

## TODO
- login otp
- signup otp
- otp workflows
