#Versions
cd src
cd app

sed -i "s/V';/.1V';/g" app.component.ts

#GH pages
ng build --prod --output-path docs --base-href ./
cd docs
cp index.html 404.html
echo ‘nyasidan.se’ >CNAME

echo "------------------------------------"
echo "--Docs ready press Enter to releas--"
echo "------------------------------------"
read

# Release
cd ..
git add .
echo "---------------"
read -p 'Commit message: ' message
echo "---------------"
git commit -m "$message"
git push

echo "---------------"
echo "--Released...--"
echo "---------------"
read