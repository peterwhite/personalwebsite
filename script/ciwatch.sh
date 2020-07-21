#!/usr/bin/env bash
npx tailwindcss build css/style.scss -o css/style.css
bundle exec jekyll serve