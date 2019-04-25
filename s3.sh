rm -rf node_modules
cd .. 
aws s3 sync JayCeeCodes/ s3://www.joncannon.codes 
cd JayCeeCodes
npm i
exit