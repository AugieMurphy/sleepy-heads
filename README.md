# Where Does Your Time Go?
###### by the Sleepy Heads: Adrian Boylan, Jerome Freudenberg, Augie Murphy, and Yu Qi Wu
###### Period 8 SoftDev with Mr. DW

## Datasets:
- [American Time Use Survey](https://www.bls.gov/tus/charts.htm)
  - This survey is done by the Bureau of Labor Statistics and is where we actually got our datasets.
- The following links were used as inspiration:
  - [Wall Street Journal on Time Use](https://graphics.wsj.com/time-use/)
  - [Your Life in Numbers](http://yourlifeinnumbers.org/)
  - [Reebok Survey](https://www.prnewswire.com/news-releases/reebok-survey-humans-spend-less-than-one-percent-of-life-on-physical-fitness-300261752.html)
  - [Flowing Data Average American Day](https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/)


## Description/Relevance
Time is the ultimate resource that we all wish we had more of. Do you want to know where your time is going? Well, we do too! Enter this website. We visualize what the average person spends doing in his or her day in a fun and engaging manner using d3 elements so that we pass softdev. Using datasets gathered from the interwebs, we display information on things like what percent of their lifetime or a day the average person spends working, sleeping, etc. This is important because, not only is it interesting to see how our activity accumulates, but it can helps use get a better sense of how to manage our time and what other people are doing with theirs.

## How to make data come alive
- Drop down menu will let users select the type of data they want to look at and the pie chart adjacent will change accordingly
  - avg weekly is the time an average person spends doing each activity during the week/workday
  - avg weekend is the time an average person spends doing each activity during weekends/holidays
  - percent weekly is the percent of time an average person spends doing each activity during the week/workday
  - percent weekend is the percent of time an average person spends doing each activity during weekends/holidays
  - pro weekly is the time a person who does an activity professionally spends doing each activity during the week/workday
  - pro weekend is the time a person who does an activity professionally spends doing each activity during weekends/holidays
- We will have a clock move (faster than real time) and display a bar graph next to it that indicates what percentage of people are doing each activity at the time indicated by the clock
- We will have a timeline of an average person's lifespan with a line graph representing the frequency of a user selected activity at every point in their lives.
- Hover over graphs (e.g. the lifetimeline) to look at values
- They can choose the timespan (day or lifetime) and the big numbers will change accordingly?
 - *Extra Time Option*: week, month, etc…

## What will be shown, absent user interaction?
- As a clock moves, there will a horizontal bar chart that represents what percent of people are doing what. 
- The pie chart will default to avg weekly.
- The activity timelinegraph shown will default to sleeping.


## What questions will your visualization allow user to explore? What questions will it provoke?
The user will be able to explore how the average American spends their day and how much time common/necessary activities take. They will be able to look at the line graph and see how the influence of these activities on our lives changes over our lifespans. This would also provoke questions about how much of our individual lifetimes (not the average person) is dedicated to these activities and whether they are worth the time spent (or maybe if they deserve more attention).

 
## Explanation of D3 feature utilization
- Sped up moving clock to show time of day
- Bar graph matched with the clock
- Timeline w/ hoverability
- Drop down to select activity/type of data and subsequent change of other elements
- Transitions between activities


