package web

//go:generate go run ../gen/gogenerate-assets.go -baseDir .

import "embed"

//go:embed dist
var Assets embed.FS
