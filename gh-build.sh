ng build --prod --output-path docs --base-href ./
cd docs
cp index.html 404.html
echo ‘nyasidan.se’ >CNAME

echo "Docs ready press Enter to releas" 
read

# Release
cd ..
git add .
git commit -m "release"
git push

echo "Released..." 
read