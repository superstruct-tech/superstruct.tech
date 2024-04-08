This is chapter 4 from [The Superstruct Manifesto: A Survival Guide for Founders Who Depend on Devs to Get Things Done](https://book.superstruct.tech).

Update: I created <a href="https://upfollow.app" target="_blank">Upfollow</a> as a companion tool to this chapter. Easily get calendar reminders to check in with devs at the 50%, 75%,and 90% progress marks. Use these check-ins to prevent rabbit holes and get updated estimates.

---

Software estimates are notoriously difficult. Devs hate giving them. They’re rarely correct. Many organizations abandon them entirely. Are they worth the trouble?

Absolutely. But not for the reason you think.

The most common reason to produce an estimate is for planning and coordinating with other initiatives. Sometimes this is necessary, and sometimes it isn’t. But that’s not what I’m talking about. 

Developer estimates are one of the most powerful management tools you have at your disposal. If you’re not using them, you’re going to experience some of the most common and frustrating problems when trying to get your projects out the door.

One of the wildest things you’ll notice is that simply requiring estimates will immediately improve the quality of your projects. It doesn’t even matter if you use that estimate for planning. You could ask a developer for an estimate in a sealed envelope and throw it in a fire before even looking at it. This would still be a huge improvement over not requiring estimates. How is this possible?

Estimates force a developer to think about the entire project end to end. If a developer can just jump right in without considering the whole timeline, they’ll often do that. Why is this a problem? The first solution that  comes to mind is seldom the best one. If your dev has been reading a trendy company’s blog post about switching to a fancy new database, don’t be surprised that their immediate step is to shoehorn that into the requirements and immediately start playing with it.

This is a good first line of defense against shiny toys and time-sucks, but it’s not the only one that comes from requiring estimates. Starting projects without an estimate is like shopping without a budget. This might be fine for routine trips to the grocery store, but you should have a price range in mind before you buy a car or a house. Even if you can’t know exactly how long a project will take, you don’t want to be surprised by an extra order of magnitude beyond what you had expected. It’s better to get that surprise before the project starts, not after.

In fact, it’s common for the estimate to vary from what you were expecting. And this is the perfect opportunity to understand why. Many times you’ll have missed some critical complexity. Other times you’ll realize your dev is out of their depth. The most common opportunity here is to get clear on the scope. If the estimate is much longer than you were expecting, it might be because the developer is unsure of the desired outcome. They may be putting too much effort into a part of the project that doesn’t matter. Everyone wins when you focus on building the most important pieces first.

When you’re responsible for your company’s success, you’re acutely aware of the constraints you are operating within. There’s never enough time or money. Constraints help us focus and prioritize. By default, devs are insulated from these realities. Estimates overcome this.

When devs are on salary or charge by the hour, there’s little direct incentive to ship. They get paid equally for every hour they spend on the project. This means that when they have the idea to switch frameworks, redo the architecture, or experiment with new build systems, they don’t have competing financial pressure. They can move a project forward, backward, or sideways and be financially rewarded the same. On the other hand, you and your customers only benefit once the project is launched. 

Scope creep doesn’t just come from above. Over-engineering and “gold plating” are common dev behaviors. You want $5 solutions to $5 problems and $100 solutions to $100 problems. You do not want $100 solutions to $5 problems. 

You’ll encounter this over-delivery behavior when you need to account for some one-off special case. For example, you might have a single customer with grandfathered terms that no longer exist for other users. Instead of just handling that account directly, a dev will want to build a whole system for handling arbitrary special terms with an admin interface and email alerts. This might be useful or worth the time if more than one of your thousands of customers has or is likely to have special terms—and a complete waste of time and money if not. You don’t want to give your devs a blank check to build things like that.

Estimates help align these incentives.

Estimates are also valuable midway through the project. They give you a good timeline of when to check in on progress. When a project goes off the rails, the sooner you know about it, the better. 

Without an estimate, you can only do periodic or milestone progress updates. With an estimate, you can check in at the 25%, 50%, 75%, and 90% marks. At these checkpoints, you should be testing the dev’s confidence that everything is going according to plan. They should be growing more certain that they will hit the target ship date as time goes on. If they are less confident, that’s a sign that you should dig in further or possibly intervene.

Pay particular attention to how the dev is acting at the 75% and 90% checkpoints. There’s a reason why the last 10% of most projects takes 90% of the time. This is where you’ll find out that your dev has been avoiding all the uncomfortable unknowns, a product manager has been moving the goalposts, or that your dev has to drive their hamster to the psychiatrist an hour away each day and doesn’t have as much time as they thought. The sooner you uncover these issues, the better—and you’ll want to cut scope, add someone else to the project, and/or remove someone from the project ASAP.

To get the most out of these benefits, you’ll want your dev’s estimates to be at least somewhat aligned with reality. To be clear, you do not need estimates to be exact to be useful. Estimates are just a type of measurement. Measurements are observations that reduce uncertainty. We can’t eliminate uncertainty, and there are diminishing returns to precision.

The best way to get good estimates is to make this clear to your devs. They are neither expected to provide estimates down to the millisecond nor are they expected to ship right on the dot. In my experience, you’re doing well if most estimates are within 15%. You’re going to have some projects be off by 50% or more. That’s life, but don’t let those become common. 

I’ve seen managers try to “reduce developer stress” by making it clear that wrong estimates were not the fault of any particular dev, but instead are the fault of the entire team. Managers like this will run planning poker sessions, take an average of the estimates, and when that estimate is invariably wrong, shrug it off and tell the dev they did a great job. This provides no incentive to any dev to improve their estimates or to try to hit the targets. Diffusing responsibility over the whole team is a bad idea.

When should you come down hard on a dev? Should they get a warning any time they miss a target ship date by more than 15%? No. It’s difficult to predict the future, and we don’t need perfect precision. We’re looking for three things: consistency, communication, and conscientiousness.

If any particular project misses its estimate, that’s not a big deal. If a particular developer consistently misses their estimates by 25% or more, that’s a problem. This means that this developer is not learning from their past projects and there’s likely to be a deeper issue. The dev may be overconfident in their abilities or be highly susceptible to Parkinson’s Law (the time required to perform a task tends to extend to all the time available to perform it).

There’s an infinite number of ways for the universe to thwart our best-laid plans. You don’t need to be upset with a dev if they miss an estimate. These aren’t deadlines, after all. A dev should only worry if they fail to do one of two things: provide sufficient warning when they realize their estimate is wrong or put in the required amount of effort.

It’s common for devs to avoid committing to estimates. Anything can happen. Unexpected issues come up all the time. This is true in all aspects of life, but it doesn’t stop us from making promises. If you ask me to pick you up from the airport, it would be ridiculous for me to say, “I can’t know for sure. I could get a flat tire or be sick that day. How about we see how it goes, and I let you know after it happens?”

So what happens in real life? What if I promise to get you, but I’m actually too sick to get you? Will you be upset with me because I’m breaking my commitment? That depends. Did I give you advance notice or were you waiting on me for hours? Was this sickness actually outside of my control or did I stay up all night drinking to earn myself a bad hangover? You’re likely to be forgiving if I give you a heads-up with enough time to make alternative plans and if my behavior shows that I took the commitment seriously.

Devs don’t need to be in trouble just because they don’t deliver before the estimate. However, you should expect them to let you know as soon as things aren’t looking good, and you should ensure that they aren’t procrastinating, getting distracted by lower-priority tasks, or otherwise poorly managing their time.

The final thing you should beware of: Do not tell your dev what the estimate should be. If a dev does not feel like they made the estimate, they won’t own it. They’ll always have the escape hatch that they tried their best to do what you wanted, but it was never their idea. If you don’t agree with an estimate or the timeline is unacceptable, you should either adjust the scope to eliminate any unimportant, time-consuming parts of the project or find a different developer.

It’s crucial that your devs take responsibility for their estimates and that you hold them accountable. Estimates will quickly become useless if devs have no skin in the game. If there’s no reason to stick to an estimate, there’s no defense against rewrites, over-engineering, or surprise disasters.

---

Want more? Check out [The Superstruct Manifesto: A Survival Guide for Founders Who Depend on Devs to Get Things Done](https://book.superstruct.tech).

Also check out <a href="https://upfollow.app" target="_blank">Upfollow</a> as a companion tool to this chapter. Easily get calendar reminders to check in with devs at the 50%, 75%,and 90% progress marks. Use these check-ins to prevent rabbit holes and get updated estimates.