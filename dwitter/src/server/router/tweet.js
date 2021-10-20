import express from 'express';
const router = express.Router();
var tweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 2,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'alli',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 3,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Sang',
    username: 'Sang',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
]

router.get('/',(req,res)=>{
    res.status(200).json(tweets);
})

router.get('/?username',(req,res)=>{
    res.status(200).json(
      tweets.filter((tweet)=>tweet.username===username)
    )
})

router.get('/:id',(req,res)=>{
  res.status(200).json(
    tweets.filter((tweet)=>tweet.id==req.params.id)
  )
})

router.post('/',(req,res)=>{
  tweets.push({
    id:Date.now(),
    createdAt:new Date(),
    name:req.body.name,
    username:req.body.username,
    text:req.body.text
  })
  // res.status(201).json(tweets)
  res.sendStatus(201)
})

router.put('/:id',(req,res)=>{
  var tweet = tweets.find((tweet)=>tweet.id==req.params.id);
  if(!tweet){
    throw new Error('tweet not found!');
  }
  tweet.text = req.body.text;
  // res.status(202).json(tweets)
  res.sendStatus(202)
})

router.delete('/:id',(req,res)=>{
  var tweet = tweets.find((tweet)=>tweet.id==req.params.id)
  var index =tweets.indexOf(tweet)
  if(index>-1){
    tweets.splice(index,1)
  }
  // res.status(203).json(tweets)
  res.sendStatus(203)
})


export default router;
