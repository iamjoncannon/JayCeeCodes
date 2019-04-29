# npm run compile
rm -rf node_modules
echo removed node modules
cd .. 
echo doing aws
aws s3 sync JayCeeCodes/ s3://www.joncannon.codes 
echo aws sync done
cd JayCeeCodes
npm i
exit