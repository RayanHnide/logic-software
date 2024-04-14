<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Cobyte Corporation">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config("title") ?? "Logic Software" }}</title>

        @viteReactRefresh
        @vite('resources/js/app.js')
        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
        <div id="react-app"></div>
    </body>
</html>
