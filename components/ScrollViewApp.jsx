import { Heading, Image, ScrollView } from "@gluestack-ui/themed";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
};

export const ScrollViewApp = () => (
  <ScrollView contentContainerClassName="items-center">
    <Heading className="text-8xl">Scroll me plz</Heading>
    {/* Aqui está a linha, e ela se repete várias vezes abaixo */}
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" /> 
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Heading className="text-8xl">If you like</Heading>
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Heading className="text-8xl">Scrolling down</Heading>
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Heading className="text-8xl">What's the best</Heading>
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Heading className="text-8xl">Framework around?</Heading>
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Image source={logo} alt="React Native Logo" className="w-16 h-16" />
    <Heading className="text-7xl">React Native</Heading>
  </ScrollView>
);