
# RestInPieces JS SDK Example

This project serves as a comprehensive example of how to integrate the RestInPieces JS SDK within a Go-based web application. It demonstrates a typical project structure that bundles a modern frontend with a Go backend into a single, self-contained binary.

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

## Asset Generation
To bundle and optimize frontend assets (HTML, CSS, JavaScript) with minification and gzip compression:

    go generate ./web/

This creates production-ready assets in `web/dist/` with both compressed (.gz) and uncompressed versions.

### Custom Builder
While modern frontend projects typically rely on external build tools like Vite or Webpack, this repository demonstrates a **custom builder** approach. 

The build logic is implemented in Go using the [esbuild](https://github.com/evanw/esbuild) library, located at `gen/gogenerate-assets.go`. This integration allows the frontend build process to be tightly coupled with the Go toolchain, enabling a seamless `go generate` workflow without requiring a global installation of Node-based build tools for the final production bundling.

## Run

    go run cmd/example/main.go -age-key age_key.txt -dbpath app.db

## TODO
- login otp
- signup otp
- otp workflows
