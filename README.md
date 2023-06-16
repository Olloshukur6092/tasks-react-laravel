# tasks-react-laravel

# client run
cd client
npm i or npm install
run project: npm run dev

# server run
cd server
# install project
composer install

# configure env file
db=onesec, root, passsword, port=5432

# migrate db
php artisan migrate

# seed
php artisan db:seed --class Category and php artisan db:seed --class Exercise

# run server
run server: php artisan serve
