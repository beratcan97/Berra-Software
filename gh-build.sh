#ng build --prod --output-path docs --base-href ./
cd docs
cp index.html 404.html
echo ‘nyasidan.se’ >CNAME
read