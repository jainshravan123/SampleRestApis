# Sample Rest Apis

[![Build Status](https://travis-ci.com/jainshravan123/SampleRestApis.svg?branch=master)](https://travis-ci.com/jainshravan123/SampleRestApis)

## About

This repository exposes the rest apis for generating the sample data.

## Description
This is a node js app which is hosted on heroku cloud. 
<br />
e.g. https://sample-rest-apis.herokuapp.com/


## API
This app is exposing the paginated apis for generating the sample data. 

If you don't provide any page number then this api will return the complete data.
<br />
e.g. https://sample-rest-apis.herokuapp.com/api/events

This app is having the static data which is divided into 12 pages. If you give any page number from 1 to 12 then it'll return the proper data for that page. 
<br />
e.g. https://sample-rest-apis.herokuapp.com/api/events?page=6


If you provide the page number lesser than 1 or more than 12 then it'll not return any item.
<br />
e.g. https://sample-rest-apis.herokuapp.com/api/events?page=-3


