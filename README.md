# Where Does Your Time Go?
###### by the Sleepy Heads: Adrian Boylan, Jerome Freudenberg, Augie Murphy, and Yu Qi Wu
###### Period 8 SoftDev with Mr. DW

## Datasets:
- [Link one](https://graphics.wsj.com/time-use/)
- [Link two](https://www.bls.gov/tus/charts.htm)
  - This is the American Time Use Survery (ATUS) and probably the most useful/relevant
- [Link three](http://yourlifeinnumbers.org/)
- [Link four](https://www.prnewswire.com/news-releases/reebok-survey-humans-spend-less-than-one-percent-of-life-on-physical-fitness-- [Link two]300261752.html#continue-jump)
- [Link five](https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/)



## Description/Relevance
Time is the ultimate resource that we all wish we had more of. Do you want to know where your time is going? Well, we do too! Enter this website. We visualize what the average person spends doing in his or her day in a fun and engaging manner using d3 elements so that we pass softdev. Using datasets gathered from the interwebs, we will display information on things like what percent of their lifetime or a day the average person spends walking, sleeping, etc. This is important because, not only is it interesting to see how our activity accumulate 

## How to make data come alive
- They can choose the timespan (day or lifetime) and the big numbers will change accordingly
 - *Extra Time Option*: week, month, etc…
- Drop down menu to select activity 
- Hover over graphs (e.g. the lifetimeline) to look at more in depth statistics

## What will be shown, absent user interaction?
- As a clock moves, we will have emoticons float to represent the percentage of people doing each activity at that time.
  - Right side, there will a horizontal bar chart that represents what percent of people are doing what. 
- Big numbers (interesting facts displayed in big font with lots of aesthetic)
  - Pie Charts (w/ clock hands) to show the percentages
  - This will also change with the activity selected but will default to sleeping.
- Lifespan timeline with percentage of life spent doing a given activity (e.g. school) using line graph. The activity shown will be controlled by user interaction but default to sleeping.


## What questions will your visualization allow user to explore? What questions will it provoke?
The user will be able to explore how the average American spends their day and how much time common/necessary activities take. They will be able to look at the line graph and see how the influence of these activities on our lives changes over our lifespans. This would also provoke questions about how much of our individual lifetimes (not the average person) is dedicated to these activities and whether they are worth the time spent (or maybe if they deserve more attention). 

 
## Explanation of D3 feature utilization
- Moving clock to show time of day
- Emoticons popping out
- Timeline w/ hoverability
- Drop down to select activity and subsequent change of other elements
- Transitions between activities


