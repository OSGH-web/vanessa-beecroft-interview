(() => {
  // content/all_article_text.json
  var all_article_text_default = [
    {
      name: "Vanessa",
      content: "At the moment I\u2019m working on my Sister Project, taking a different photograph of the same girl for every season. I change the color of her hair, eyebrows, and skin color using a Pantone reference. She is very white with bleached hair in the winter, then starts to turn pinkish and more warm, and in the summer she becomes beige. In February she becomes blue, and her hands are bluish. Brunette and almost ugly in the fall, with freckles painted on her face. I wanted everything to be the same in each image except for the colors."
    },
    {
      name: "John",
      content: "Who is she?"
    },
    {
      name: "Vanessa",
      content: "My stepsister. She\u2019s 14. My father introduced me to her saying she\u2019s a difficult and introverted teenager. Jennifer didn\u2019t speak, and she had this same expression in real life. And to make her happy, I bought her Miu Miu shoes and chocolate. And she would just lie there with those legs, eating chocolate. Very Lolita."
    },
    {
      name: "Bernadette",
      content: "And you\u2019re going to publish this as a calendar?"
    },
    {
      name: "Vanessa",
      content: "Yes. But I will also blow these up to life size. To me, it was almost like a psychological portrait in which the same woman could be very cold or almost beautiful and reassuring, and then overwhelmed in the summer because she\u2019s hot, and then kind of ugly in the fall. One person with many different personalities, many different sides. But the best was to color her, like digital retouching but live. When we turned her white, she started to cry because she didn\u2019t like herself. It was very sexy because she had this British accent and was very spoiled and needed her chocolate and Coke. It was very funny."
    },
    {
      name: "John",
      content: "I like how she\u2019s changing but not changing. Like a chameleon."
    },
    {
      name: "Vanessa",
      content: "Yeah."
    },
    {
      name: "John",
      content: "Do you often think about changing your life? Because you were talking about that time in the street when you suddenly thought you should change everything..."
    },
    {
      name: "Vanessa",
      content: "Yeah. But I don\u2019t consider personal life as life. It bothers me that there is a personal life. So sometimes I want to change it, but actually, I never do anything. I feel like I do, but the only life I ever think about is the work. And I don\u2019t have much left outside of that."
    },
    {
      name: "John",
      content: "So your personal life doesn\u2019t matter?"
    },
    {
      name: "Vanessa",
      content: "You know, I wish it didn\u2019t, but it does. You get sick and you have moods, and they continuously interfere, and I wish that didn\u2019t have to happen. But the work is a stable person. Even if it\u2019s disturbing to me or embarrassing or ugly or not exactly what I wanted to do, it never had problems. As a person, I have to catch up with the work."
    },
    {
      name: "Bernadette",
      content: "Well, you just got married."
    },
    {
      name: "Vanessa",
      content: "I know."
    },
    {
      name: "Bernadette",
      content: "So was that work or personal?"
    },
    {
      name: "Vanessa",
      content: "Well, it started personal, and I thought it was great that someone asked me to marry them. I thought: wow, I\u2019m going to go for it. But then I couldn\u2019t do it all the way down. As usual, I had to put my hands in and ruin the thing. In that case, it started with the idea that I couldn\u2019t wear white. I couldn\u2019t be the subject. I had to dress everybody else first. So all the girls were dressed up like brides, and not me. I couldn\u2019t do it. It was beyond\u2026 embarrassing."
    },
    {
      name: "John",
      content: "And you used particular designers?"
    },
    {
      name: "Vanessa",
      content: "Alessandro Dell\u2019Acqua did the outfits for me and Greg. Very nice white suits with nothing underneath and the collars up. But like a regular suit to go to work. And the others were Prada and other minor designers. I hired Gillian Wearing, who helped me style the Sister Project, to find outfits for the wedding people. I told her my idea was that the older women had to be completely wrapped in clothes. I didn\u2019t want to see any skin. And the young women had to be as naked as possible, sexy. And then my sister and another 17-year-old girl had to be in the front. And the men wore men. And Greg\u2019s sister was pregnant, so we had her in a sort of Napoleonic maternity dress. You couldn\u2019t tell which couple was getting married or who was marrying who. All the men were together, and the women were together. Then I decided that people were my family, because I don\u2019t have a family, and my family doesn\u2019t meet up ever. There was no way to put them together, so I decided to put in a sense of family. There was my designer, my dealer, my photographer. My family was everybody."
    },
    {
      name: "John",
      content: "And Franca Bagatella was doing what?"
    },
    {
      name: "Vanessa",
      content: "She hosted it. She facilitated it. She provided transportation because I couldn\u2019t walk there. It was on top of a mountain. On a big hill with chickens, but that was profane and no longer open. San Sebastian was hanging in church, but there wasn\u2019t enough time, and the picture didn\u2019t come out the way I was thinking. People were not focusing. They were thinking about the wedding."
    },
    {
      name: "Bernadette",
      content: "You were the only one thinking about the picture."
    },
    {
      name: "Vanessa",
      content: "I was telling them to take off their personal belongings, their watches, to not move and not to smile. I freaked out and was just working."
    },
    {
      name: "John",
      content: "A worker-bride."
    },
    {
      name: "Vanessa",
      content: "I wanted to blend in. Also, I forgot about my makeup, and I went swimming in the pool, so my hair was after-the-pool hair. A disaster."
    },
    {
      name: "John",
      content: "So did you blend in, in the end?"
    },
    {
      name: "Vanessa",
      content: "I was so bossy and pissed off. I tried to command and dictate everything and kind of became a bad figure. I was so embarrassed because the people got too close, like the mothers. I was yelling at them and telling them to stop moving. And the shoes were hurting them, and it became horrible."
    },
    {
      name: "John",
      content: "Did you kiss Greg?"
    },
    {
      name: "Vanessa",
      content: "I think so. But he was a bit out of it. And we were there, and the priest was saying the Mass in Latin, and we were so confused. I don\u2019t think we understood anything that was going on. But it was beautiful. I think. Anyway, it was a bit crazy. It\u2019s impossible to marry anybody. You have a wall in the middle, and there\u2019s no way. My mother was a very serious, left-wing feminist, and she was completely against me. There were no men in our house ever. My brother was kicked out when he was a baby, and my father was left in England. So I don\u2019t know anything about weddings. I was raised with completely opposite ideas. So the wedding was personal, but in the end, I couldn\u2019t just let it be personal. I am not casual. I can\u2019t let anything go."
    },
    {
      name: "Bernadette",
      content: "But would you say your persona is present in the work?"
    },
    {
      name: "John",
      content: "Or is it totally absent?"
    },
    {
      name: "Vanessa",
      content: "I like what you wrote about that. How it was a perfect way to hide. It was nice to me because it\u2019s true that if I identify with the models, I get really excited about it. And people say, \u201Coh, that looks like you,\u201D but it\u2019s not even true. I never look for people that look like me; it just happens. I just put them a certain way, in a certain position, and so people identify me with them. But it\u2019s not me."
    },
    {
      name: "John",
      content: "But you use other people to stand in for you?"
    },
    {
      name: "Vanessa",
      content: "Well, I use myself as a test. So I test the zone first. Can we be all naked in heels in a space? Can I do that? And then I send the other girls instead. I couldn\u2019t do a work with men because I can\u2019t test that. I can\u2019t be representative for them. I can take responsibility for the girls."
    },
    {
      name: "John",
      content: "How did you start with the Navy thing? What let you to these men?"
    },
    {
      name: "Vanessa",
      content: "I was raised in Europe during the cold war, by a lake where the Americans kept going back and forth with their planes. And their military base was inside an empty mountain, which was a real mystery to me. I could never drink Coca Cola or anything like that. We had a big taboo about the USA. But when I moved here I thought this was completely wrong. It was a process. America was not this thing that was just there. And the American was not just this guy named Bill who chews chewing gum and eats hamburgers. America was actually much more interesting."
    },
    {
      name: "John",
      content: "Why did you come here?"
    },
    {
      name: "Vanessa",
      content: "I was curious because it Seemed so bad and so nationalistic, this American flag. But when I came here I thought there was no nation, more like a process. A mixture, a mess, an inferno. I thought it was contemporary and interesting and socially confusing. Europe is too bourgeouis, too civilized, and there is no language to communicate contemporary concepts without sounding pompous. Back in Italy, I happened to go on the internet one day, and I was catapulted into a chat room where I met all these people speaking American. I started to hang out nthere and I started to like this way of speaking: dry and bold and simple. And very mysterious as if they had no real life. I spent 24 hours a day in there, learning American from Colorado and Wisconsin and Arkansas, places I didn't even know. And then I started"
    },
    {
      name: "Vanessa",
      content: "Some of these people were not really revealing their identities, and they were military. At that moment, I decided to start going to military-only events. And these people were all over the globe, covering the entire surface, like the Odyssey, all at the same time. And for a show in Japan, I decided to do something with the Navy. I found a picture in a Blue Jacket Navy Manual. And this picture was a formation of people, and it was like a minimal sculpture. But when I sent the picture to Japan, they threw me out of the show. Kaspar K\xF6nig did it, and I was very depressed. They said it was outrageous, and didn\u2019t I remember Hiroshima bomb, etc.? And I thought, exactly. That\u2019s why I want to show it in a museum, to pack it inside there as art. Miltos always told me that once something becomes art, it loses its value. So Marilyn is no longer Marilyn, it\u2019s Warhol. So I thought, the Navy becomes a work. It\u2019s no longer the Navy. But after I was kicked out of the Japan show, I went back to my computer and started searching for pictures\u2014portraits of military. I downloaded about 3000 pictures of any sort: faces, men with dog tags, camouflage, naked with big gun belts, mostly naked, pictures taken at home. Beautiful boys between 17 and 37. And so I started to think of the Navy as a kind of romance. This body narcissism, these faces like movies. Old warriors and movie stars. And I finally got in touch with one of them who could help me realize something. He was Terrence Hoey. He was a great military contact because he was very articulate and wrote proposals to the Pentagon and the Navy Seals. So everything was through him."
    },
    {
      name: "John",
      content: "It\u2019s amazing that the Navy agreed to let you handle them this way."
    },
    {
      name: "Vanessa",
      content: "The only way I would do it was if the Navy agreed and signed that they were going to be an artwork. I wanted it to be the real Navy and that it be official. So you never know when is the end of the real and the fiction. It was very stressful."
    },
    {
      name: "John",
      content: "I thought the audience was going through some stress. Especially at the dinner afterwards."
    },
    {
      name: "Vanessa",
      content: "That was so sick. When the general said, \u201CGod Bless America and God Bless Art,\u201D this was crazy."
    },
    {
      name: "John",
      content: 'And when he said his boys were ready to die for Vanessa "Bancroft." That there would be no art without this sacrifice of American lives.'
    },
    {
      name: "Vanessa",
      content: "I liked this. Of course, it\u2019s the most embarrassing thing that could happen. But I use art to see how far I can go. And the more institutional the better."
    },
    {
      name: "John",
      content: "You weren\u2019t worried that by allowing them to speak, they would recover their value or change the meaning of your performance?"
    },
    {
      name: "Vanessa",
      content: "I\u2019m always curious to see what happens. In a way, it was a kind of sabotage to the art world. I thought: let\u2019s give them real crap. Go, talk. But I didn\u2019t know they were going to talk about art. As if you could speak about art like that, in that kind of ceremony. I thought it was funny. But nothing takes the meaning away because there is no immediate meaning that I want to\u2026 for me, the meaning is whatever people are going to make out of it."
    },
    {
      name: "John",
      content: "And you had no idea what General Steele was going to say?"
    },
    {
      name: "Vanessa",
      content: "With the Navy, I never say anything. It\u2019s always Terrence who takes care of it. So we are completely passive. Whatever they want to do, they do. So I had no idea what was going on."
    },
    {
      name: "John",
      content: "Why do you think they agreed to be an art piece?"
    },
    {
      name: "Vanessa",
      content: "Because Terrence is a very good writer, and in his proposal, he was able to speak about the value of honor represented in the picture. And it\u2019s true, there is nothing that is against the Navy in the picture."
    },
    {
      name: "John",
      content: "So they saw it as Navy promotion?"
    },
    {
      name: "Vanessa",
      content: "Yeah, in the long term."
    },
    {
      name: "Bernadette",
      content: "That\u2019s really interesting, arriving at a language that can convince the Navy."
    },
    {
      name: "John",
      content: "Do you feel like you promoted the Navy?"
    },
    {
      name: "Vanessa",
      content: "No, no, not at all. I don\u2019t think art effects have to be immediate. The immediate effect might be the wrong one or the mistaken one, and that\u2019s fine. Because that is what they want to see. For example, that a naked girl is sex, or that the Navy is whatever it is. But it takes a while to make it work, and I\u2019m not in a hurry. I would feel embarrassed to do a work against the Navy or against nudity and objectification or whatever. There would be no reaction and no fight. I like to show things whose reactions are unforeseen. All I really did was say: that is the Navy, it exists. And they look so stupid in these old hats. The uniforms are all wrong. Maybe I\u2019m sorry I sacrificed my work to those ugly outfits."
    },
    {
      name: "Bemadette",
      content: "And did people react badly to VB 42?"
    },
    {
      name: "Vanessa",
      content: "I don't know. Not as much as they would in Italy. They hated the girls in Italy, They said it was horrible, vulgar, sexist. That it wasn't art. But here they don't react so much. Is it because there is more respect for the military in this country of the Whitney? I don't know. But I don't want to ruin a thing that doesn't say more than what it is by saying too much about it. The Navy was just a parentheses, a special project that informs the work with the girls. If the girls are informal and they fall apart, and their kind of urban nudity isn't locked in a solid formation, the perfect formations of the military inform them. They are an example for the girls."
    },
    {
      name: "John",
      content: "In your Guggenheim performance, what made you decide to collaborate with a fashion label?"
    },
    {
      name: "Vanessa",
      content: "At that time I wanted Guggenheim, naked and Newton. I wanted nude girls photographed by Newton in the Guggenheim. But the curator Yvonne Force didn't care about nudity. She wanted Gucci. and wanted me to collaborate with him. And I didn't know what to do. so I called him and asked him if nudity was too 70's and he thought about it and then said yes. And I so I decided to make them buy the most expensive bikini they had, the rhinestone bikini. Now I'm really annoyed by that design. But at the same time, I don't mind compro-mising. Which means I have to deal with that kitsch type of thing. But at first I was very upset, because the Guggenheim was so pure and white and ideal, and the girls had to wear these bad shoes."
    },
    {
      name: "Bernadette",
      content: "So the sort of Gucci branding of the whole event annoyed you?"
    },
    {
      name: "Vanessa",
      content: "Just because I don't like the brand. I would have rather used Manolo Blahnik - they are much closer to my ideal. It's not really brands that bother me, but that Gucci was the curator's taste and not mine. So I did it anyway, because in the end it doesn't matter. I can always do something else tomorrow. And I realized I had to compromise a lot."
    },
    {
      name: "Bernadette",
      content: "Do you ever think about extending yourself out of the art world?"
    },
    {
      name: "Vanessa",
      content: "That would be nice. But it takes a lot of energy. And a lot of responsibility. And when it comes to practical things, I can't deal. But I like the idea of escaping, if I could."
    },
    {
      name: "Bernadette",
      content: "Because your work has been so consistent from the very beginning, and for me VB has the effect of a brand. The consistency and the mobility of a brand. I could see something like a Vanessa Beecroft perfume."
    },
    {
      name: "Vanessa",
      content: "Well if someone helps me to do other things, I would. In fact, the reason a lot of my performances at the beginning were ugly and full of mistakes was because I couldn't do it all the way. I wanted Manolo Blahnik shoes but could only manage to get ugly platform shoes from the thrift store, or whatever. But now I have more support, and my ideas are more possible. I just saw a building in Williamsburg, and Jeffrey Deitch said I should buy it. I don't really want a building, but I thought maybe I could do a hospital. My ideal hotel is almost like a hospital. You have a perfect, clean room, and of course a nurse, and pills. It's affordable, and you can just go in the room and pass out. And maybe get a facial or a massage, like at a spa. And all the medicines."
    },
    {
      name: "Bernadette",
      content: "What sort of things do you read?"
    },
    {
      name: "Vanessa",
      content: "It's a bit late now, but Brett Easton Ellis. Less Than Zero and The Informers. And A Brief History of Time by Stephen Hawkings. I like him, and he's so simple to read, like a school book. I usually carry like 6 or 7 books at a time. I read books in the middle, and one or two at once. And I was reading a book on Pollock but I lost it...so I saw the movie."
    },
    {
      name: "John",
      content: "How was that?"
    },
    {
      name: "Vanessa",
      content: "It's okay. It's terrible, but it's a chance to think about Pollock again. It's very much about the drama of someone looking like a crazy person who eventually drops some paint on the floor and starts to have a genius idea, so I don't know."
    },
    {
      name: "John",
      content: "Did you ever feel like you had a genius art idea?"
    },
    {
      name: "Vanessa",
      content: "Since I was little my aesthetic was the same, I was throwing away my mother's clothes if I didn't like them. That was always already there. And I didn't know what it was, and I felt guilty, and because it wasn't art it was something wrong. And then I was only drawing girls with orange hair, or red. And then I was going to the movies with my mother and seeing Bu\xF1uel and things. But in art school, I couldn't work I didn\u2019t know what to do. It was between Michelangelo and Jenny Holzer\u2026 I didn\u2019t know what to do. It was a problem because I bought so many books, and I started to try to read, but not really reading them. And at that time, Miltos came in. He saw me just picking through them and looking for inspiration. And he said, \u201CWhat\u2019s all these books? Throw them away!\u201D I was so proud of them, my shelves of Marx and Brecht. Everybody was there. It was like my wall portrait, with all the people. Like Mao. I was so proud, and Miltos said it was crap, all that theory. So I packed them and sent them away to my uncle. And then I started to cry. And he said, \u201CYou stop crying. Make some drawings instead.\u201D So I started to do watercolors of girls crying. And I wrote obsessively in my Book of Food, my diary of everything I ate. That was my nightmare life. And then a teacher at school invited me to participate in a show, and I brought the Book of Food and put the drawings on the floor, and I brought all these girls who I knew had problems, and they looked like my watercolors. And they undressed, almost, and put on heels and red, pink, and yellow outfits. They were a special crowd, a special audience, but they became a work themselves. And that was VB1. And so it started, and then there was VB 2, 3, 4. I was self-reproducing. And I had no money, and was looking for girls to volunteer and trying to find shoes and clothes. I would spend all the money on shoes, so we couldn\u2019t eat anymore. And it was very hard at that time to extend my aesthetic to the girls, and when I look back at the book, I\u2019m embarrassed. They are so naive. I couldn't realize my taste, or transfer it. I used colored hair because I wanted to make them look less real. It was only later I realized that didn't matter, and that as soon & you tell them not to speak they become visual. But I really liked the girls at school and I felt lucky to have this population. So between those, that I was collecting in my mind, and the ones in the magazine pages... the only way to reproduce them was to put them instead of the picture. I couldn't paint them because I was no good at craft. But in Italy this wasn't really working, and only one teacher thought I should continue. But I decided that girls were my material and I could change their color, make them yellow and red, and eventually naked."
    },
    {
      name: "Bernadette",
      content: "How many girl performances have you done?"
    },
    {
      name: "Vanessa",
      content: "Forty-two. Some are very bad. There was a period in 1997 when every museum wnated a performance. I was running around buying terrible looking panties at the last second, and the camera was a digital amera and the pictures were so low quality. I felt like I had to go, like on a mission. I had to go to Japan, to Australia, and I couldn't say no. No matter if it was good or bad, I had to do it."
    },
    {
      name: "Bernadette",
      content: "And you would just cast them a few days before?"
    },
    {
      name: "Vanessa",
      content: "Actually the museum does it. So these girls are catapulted into the space on the day of the opening. The Museums send me pictures and give me options. Usually I give them a reference picture. For England, I sent them a pictures of Elisabeth I, Twiggy, and Vanessa Redgrave. I give different pictures depending on where I go. Now, in Los Angeles, I want flag girls with no hips or breasts, because that's too sexual. In Longdon my ideal was very plain and no sexualized, but in the end it was so much about breasts."
    },
    {
      name: "Bernadette",
      content: "They look very sexual."
    },
    {
      name: "Vanessa",
      content: "Yeah. And I am very disturbed. When the girls came up to talk to me, i panicked. They were so naked and I was horrified. Like twenty butts - a nightmare. They were just walking around naked and the people in the gallery were working on their computers with these girls every-where. It was chaos. So I'm hoping that if I flatten them, and they have less attributes, maybe it will look different. People won't focus on those details. Some bodies are very much bodies and there's nothing you can do. I'm very aggravated by that. I paint them white and put them in heels, but they're still very real. They don't become a picture. I want to show bodies losing that feeling of flesh."
    },
    {
      name: "John",
      content: "Well that's what fashion is all about too: making girls' bodies into abstractions."
    },
    {
      name: "Vanessa",
      content: "For me it doesn't have to be about the standard of beauty, but not too far from it either because then you are talking about something else. Some can be more metaphysical, others...but I'm okay with the work being bad or wrong, or showing things I don't want to show. Because those things are there, and that's realistic. It can be heart-breaking. It's more in the memory. Because after the performance is over, I think: how beautiful, how abstract. And when I see the picture it hurts me. Sometimes I wish they wouldn't be documented. I prefer the ready-made. The hallucination, the vision that lasts a moment. But maybe the pictures are more temporary than the memory."
    },
    {
      name: "John",
      content: "So you're ready to get back to the girls now?"
    },
    {
      name: "Vanessa",
      content: "Yes. I'm still doing it because I still haven't seen one picture that I like of my work. I'm always hoping to get it right the next time. Or until it loses sense for me. Until now, it's still wrong and there are still misunderstandings, and I'm still not sure. And that's enough for me to keep working. I don't think I can do anything else. I keep showing them until I decide what they are. I still I feel very much a stranger when I have the girls there. They're too this or too that, and never something that I think they should be. I want to see what they really are, beyond everything we know. What I like about Helmut Newton is the way his women aren't really women. They're more like fear incarnated. But that's so much something, and I don't believe in that either."
    },
    {
      name: "John",
      content: "You're looking for a girl that's not a girl."
    },
    {
      name: "Vanessa",
      content: "That is a girl, a boy, an athlete, lazy, everything. I don't recognize them yet. And fashion is too strict, and doesn't represent these girls. Some girls exist. I see them and I think: there she is. But they mix with others and I'm not sure anymore. I don't think this way about boys. I don't have that problem with them...I don't care."
    },
    {
      name: "John",
      content: "You spoke about the Navy losing its value in an art context. Do you also want girls to lose their value?"
    },
    {
      name: "Vanessa",
      content: "Not rally. They're no longer girls, they're something else. So I want to create another experience of women that might be the wrong one because they're naked, they have heels, they're kind of tacky... because I'm not sure what they are, really. I put them there as a problem. And then want to see what happens. One thing I'm more concerned about now is to not give too many features. Now I have bigger productions, and I wonder if I'm doing something against art when I fix it so nicely. Before, it was more like they were thrown in space. So I want to change what they are, but I don't know what they are exactly. It's still a question."
    },
    {
      name: "Bernadette",
      content: "How do you decide how many girls to use? Why never just one girl?"
    },
    {
      name: "Vanessa",
      content: "Once there was. But with one it's so much about her. The only time I used one, the video was sold out. People got crazy about her. And she was a star, and it was all about a specific girl. It's more individ-ualistic. Usually a number that gives a sense of quantity is about 20. In Vienna I'm asking for 45, It becomes a general statement, and numbers intimidate."
    },
    {
      name: "John",
      content: "Your performances are about populating spaces and populating moments. And I'm wondering about your desire to create populations or crowds, this loss of individuality in a kind of crowd formation."
    },
    {
      name: "Vanessa",
      content: "I always had this idea of a kind of international movement of girls. Every country I go to, I take over the museum with girls. It is a horizontal expansion. A split personality. One girl that is twenty. And I was always interested in the aesthetic of Marx/Engels, which I studied in school. They always talked about the typical and the universal. The typical is like each face. And the universal is this face extended to a mass. It's more powerful, like an army. It's intimidating, like a night-mare. In Vienna, they're talking so much about their new space, and since they're being so fascistic about it I decided to put everybody in black boots. It will be like a minimal painting with a black line across the bottom, and then on top whatever - big, small, blonde, brunette. The boots will be strong. Then I thought that could be a bit vulgar, and Gillian pointed out these Helmut Lang boots. And he's from Vienna, and that's fun that he represents them as their national designer."
    },
    {
      name: "Bernadette",
      content: "In your book there was a picture of a group show. And it was nice because your work was really jarring in the context of the other art."
    },
    {
      name: "Vanessa",
      content: "For me, a performance is like a drawing. I need white all around. If there are other details I get confused. For me, photos are closer to painting, whereas performance and drawing are related. In a group show, I'm always afraid they will come off too much as sculpture, and I don't know about sculpture. And Jeffrey Deitch asked me to write down some rules, because I used to tell them not to move, not to speak, not too fast or too slow, don't fall down. When too many girls went down on the floor, it was like my picture was falling on the floor. So I give them some rules but the other 50% is up to them to realize. And there is no communication. I don't talk to them because I'm not able to. So they come over and I expect them to understand and to volunteer, and I'm very grateful because I feel it's a very brave position. They have to be smart enough to understand what's going on no matter what, even if they don't like themselves. Because I don't look for the girls who like themselves and hang out naked. Many of them would never do that. And I'm sympathetic to them but I don't talk. I'm kind of rough. They want me to help them with their hair but I can't touch them. I just leave. And the technical people come in and do the hair."
    },
    {
      name: "John",
      content: "You can't touch them, talk to them, or even look at them?"
    },
    {
      name: "Vanessa",
      content: "No, because they're like a piece of material I install. And it's very weird if they complain. In London they were very smart girls and they wanted to talk about the work, but they were the work and I couldn't talk to the work. But they are safe, because it's a museum or a gallery, and it's never outside the context of art. But at the same time, they are violently put in that situation in front of the audience. That mini-violence of embarrassment I like to introduce, which we feel also in our private life, when we are naked. I reproduce that in front of every-body. And that moment is not intellectual. And nothing should be said to make them feel better. I have to talk when I'm casting them, and explain that it's art and tell them all about the concept. But it's never friendly, I feel like I'm a man in that moment. I want distance, tension intimidation."
    },
    {
      name: "John",
      content: "You're almost like a football couch, the way you send your girls out And what you want them to do is reproduce embarrassment?"
    },
    {
      name: "Vanessa",
      content: "Because there is no other way. Either you pursue beauty, which is impossible, or you get abstract, which I was never really able to."
    },
    {
      name: "John",
      content: "It's either beauty, abstraction or embarrassment?"
    },
    {
      name: "Vanessa",
      content: "I guess embarrassment is in-between. But embarrassment can maybe be beauty. I want to reproduce it in the audience. If they were comfortable it would be like a party."
    },
    {
      name: "John",
      content: "And you don't want to party."
    },
    {
      name: "Vanessa",
      content: "No. Me, never. Not even after the performance. I go away, and I'm devastated because it's over. The girls were there for a moment, and then the moment is gone. All these shoes everywhere and pieces of hair on the floor \u2013 a mess. And then the pictures are bad, and I'm always disappointed."
    },
    {
      name: "John",
      content: "So pictures are always a problem. Maybe the picture you're hoping for is impossible."
    },
    {
      name: "Vanessa",
      content: "Exactly. It's an illusion. A miracle, and then it's gone. They aren't available. It's supposed to be a picture, but it's not."
    },
    {
      name: "John",
      content: "And you always move between control and disappointment. The picture always disappoints you."
    },
    {
      name: "Vanessa",
      content: "Because I'm a perfectionist. That's why they give me Zoloft. But I give up before half way...I'm overwhelmed by the idea that it's not going to be okay."
    },
    {
      name: "John",
      content: "To me, the girls are like imaginary populations which pass through insti-tutions, pictures, fashion brands, bodies, but that are not really contained by any of these things. You show how there's no way a girl can really exist through these things...they make her appear but at the same time she's never really there."
    },
    {
      name: "Vanessa",
      content: "I put them on pedestals that happen to be shoes. But the emphasis shouldn't be that. This is a girl, real size, 1:1 scale."
    },
    {
      name: "Bemadette",
      content: "Your work is so contemporary, or helps to define it. Is that a question for you? Do you ever consciously go out and try to produce something contemporary?"
    },
    {
      name: "Vanessa",
      content: "I always think of the contemporary as abstract. I think forms and representations are old. And I always felt backwards in comparison to Miltos, for example, who throws himself toward the future with no parachute. I associate the contemporary with technology and disappearance. I always think I mus be retro. I always think I have to do this work so that after me they can do something else, something more contemporary. Something that has nothing lo with the body, but with the mind. I used to be more involved with computers but I couldn't really do anything there. But I am very concerned, and I wish somone would do something that is contemporary. Many artists don't seem contemporay to me. Maybe the idea, but not the form. It's still about objects. Sometimes I think what if naked women are not contemporary? I'm trying to bring them somewhere else but maybe I'm not. I don't know if it's a fashion, a look, a technique or something else. In my work, I use it to break thick walls, to try to get to what happens next, another way of thinking..but I wish I were more contemporary."
    },
    {
      name: "John",
      content: "Maybe you are trying to get past all these bodies..."
    },
    {
      name: "Vanessa",
      content: "I have a problem with bodies, big problems with bodies in general that's probably why I am doing it. I wish there were no body. I don't know where to put it."
    },
    {
      name: "John",
      content: "It seems like this tension is part of your pleasure. This moment when no matter what you do, the thing falls apart or gets compromised."
    },
    {
      name: "Vanessa",
      content: "Maybe yes. I always leave. I stay a lot in the steam room. That's where I go during the performances. Matthew Barney is probably somewhere with a hammer, and Maurizio and everybody are probably doing their jobs. And here! in this white cloud. But there are horrible people in there too. Their bodies are wrong and they always start to speak. And relaxing is like a job too."
    },
    {
      name: "Bemadette",
      content: "What else do you do to relax?"
    },
    {
      name: "Vanessa",
      content: "There is this guy Malcolm I met at the gym and I asked him to be personal trainer. He puts me on a big ball and makes me bounce on there. He says if I can do that I can start to control everything."
    }
  ];

  // index.js
  var imessageContainer = document.getElementById("imessage-container");
  function addMessageElement(message) {
    let messageElement = document.createElement("p");
    messageElement.textContent = message["content"];
    if (message["name"] === "Vanessa") {
      messageElement.className = "from-them";
    } else {
      messageElement.className = "from-me";
    }
    imessageContainer.appendChild(messageElement);
  }
  all_article_text_default.forEach((message) => addMessageElement(message));
})();
