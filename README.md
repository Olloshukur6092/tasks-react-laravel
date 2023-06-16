# tasks-react-laravel
# git clone 
# client run
cd client
npm i or npm install
run project: npm run dev

# server run
cd server
composer install
configuration env file db=onesec, root, passsword, port=5432
php artisan migrate
php artisan db:seed --class Category and php artisan db:seed --class Exercise
run server: php artisan serve
