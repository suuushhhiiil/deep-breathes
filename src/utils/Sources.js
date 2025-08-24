import { Heart, Brain, Wind, Users } from "lucide-react";
import mindTraffic from '../assets/images/mindTraffic.jpg';
import utterYourThoughts from '../assets/images/utterYourThoughts.jpg';
import stories from '../assets/images/stories.jpg';
import guidedWellness from '../assets/images/guidedWellness.jpg';

export const Links = [
  {
    link: "Home",
    to: "/",
  },
  {
    link: "Utter Your Thoughts",
    to: "/utter-your-thoughts",
  },
  {
    link: "Mind Traffic",
    to: "/mind-traffic",
  },
  {
    link: "Explore",
    to: "/explore",
  },
]

export const features = [
  {
    title: "Mind-Traffic",
    description:
      "Answer quick, psychology-based questions to uncover your current emotional state and get a personalized score.",
    icon: Brain,
    image: mindTraffic,
    link: "/mind-traffic"
  },
  {
    title: "Utter Your Thoughts",
    description:
      "Write how you feel in your own words and let AI detect your mood, offering supportive suggestions instantly.",
    icon: Heart,
    image: utterYourThoughts,
    link: "/utter-your-thoughts"
  },
  {
    title: "Guided Wellness Tools",
    description:
      "Follow simple breathing, mindfulness, and relaxation exercises tailored to your busy student or work life.",
    icon: Wind,
    image: guidedWellness,
    link: "/wellness"
  },
  {
    title: "Real Stories & Support",
    description:
      "Discover stories from young adults overcoming struggles and access trusted counselors who understand you.",
    icon: Users,
    image: stories,
    link: "/stories"
  },
];