const articles = {
  info:
  "Steve Irwin was born in 1962 to Lyn and Bob Irwin.<br>When he was a child he was taught about various reptiles by his father, and he started handling crocodiles at the age of nine.<br>He grew up to become Crocodile Hunter, a world famous nature conservationist, and zoo keeper.<br> He was involved in many media campaigns, and he would pour the payments he earned into his wildlife fund.<br> He was a massive TV personailty and actively promoted conservationalism until he died in 2006 after being pierced in the chest by a stingray barb.",
  
  career:
  "Steve Irwin and his wife Terri founded the Steve Irwin Conservation Foundation in 2002, with Steve Irwin being the public face of the organisation.<br>It was later renamed to the Wildlife Warriors Worldwide.<br>Wildlide Warriors was an internationol non-profit organisation dedicated to wildlife conservation.<br>In the month following Steve Irwins death, the organisation recieved over two million dollars in donations.",
  
  entertainment:
  "Steve Irwin starred in the TV show 'Crocodile Hunter' which aired in Australia in the year 1996.<br>The show was massively successful and got two spinoffs, 'Croc Files' and 'The Crocodile Hunter Files'.<br>'Crocodile Hunter: Collision Course' was a full length movie and was released in 2002 to mixed reviews.<br>Steve Irwin made many appearances on The Tonight Show with Jay Leno, and also made cameos in the Wiggles and Dr. Doolittle 2.",
  
  family:
  "Steve Irwin met Terri Raines in 1991. The couple said at the time that it was love at first sight.<br>They were married a year later.<br>In 1998 they had their first kid, a girl who they named 'Bindi Sue Irwin'. She is named after a Saltwater Crocodile and a Staffordshire Bull Terrier.<br>Five years later they had a son, who they called 'Robert Clarence Irwin'. He was named after Steve's father.<br>Steve cared about his family as much as he did his work. He often said that if he was going to be remembered for anything he hoped that it would have been for being a good father.",
  
  legacy:
  "Steve Irwin died on September 4 in 2006 when he was pierced in the chest by a stingray barb.<br>A private funeral was held five days later.<br>A public memorial was held on September 30 in Australia. It was broadcasted live and was estimated to have been seen by around 300 million viewers worldwide.<br>Steve Irwin day is now an annual event held on November 15. On Steve Irwin Day, employees at the Australia Zoo wear khaki uniforms in honor of Steve, and several events are held to raise money for Wildlife Warriors, so his work can be continued."
}
function selector(tab){
  document.getElementById("info").style.backgroundColor = "lightgreen";
  document.getElementById("career").style.backgroundColor = "lightgreen";
  document.getElementById("entertainment").style.backgroundColor = "lightgreen";
  document.getElementById("family").style.backgroundColor = "lightgreen";
  document.getElementById("legacy").style.backgroundColor = "lightgreen";
  document.getElementById(tab).style.backgroundColor = "lightgrey";
  
  document.getElementById("paragraph").innerHTML = articles[tab];
}
