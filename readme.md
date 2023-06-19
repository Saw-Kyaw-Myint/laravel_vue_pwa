# Laravel + Vue PWA

## Installation

### Prerequisites

Before getting started, ensure that you have the following installed on your system:

- PHP 8 or higher
- Composer
- MySQL or PostgreSQL
- Web server (e.g. Apache or Nginx)
- Node.js 16 or higher
- NPM 8 or higher

Clone the repository:

```
git clone https://github.com/Saw-Kyaw-Myint/laravel_vue_pwa.git
```

Change into the project directory:

```
cd laravel_vue_pwa
```
First need to run api.So 
install PHP dependencies:

```
composer install
```

Create a copy of the .env file:

```
cp .env.example .env
```

Create a database and update your database connection details in `.env` file

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=larave_vue_pwa
DB_USERNAME=root
DB_PASSWORD=
```

Run database migrations:

```
php artisan migrate
```

Run database seeder:

```
php artisan db:seed
```

Run the dev server (the output will give the api):

```
php artisan serve
```

Api is running at http://localhost:8000.

After completing above steps,Can run vue app.

Install Node dependencies:

```
npm install
```

Build assets:

```
npm run build
```
Run the following command to serve the application:
```
serve -s dist
```
Now **vue app** is running at http://localhost:3000
