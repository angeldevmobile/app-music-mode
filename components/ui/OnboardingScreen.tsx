import * as React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { onboardingStyles as styles } from "./onboardingStyles";

const onboardingData = [
	{
		image: require("../../assets/images/avatar_user.png"),
		title: "Descubre nueva música",
		subtitle: "Millones de canciones y podcasts para explorar",
	},
	{
		image: require("../../assets/images/music_dots.png"),
		title: "Crea tus playlists",
		subtitle: "Organiza tu música favorita en colecciones personalizadas",
	},
	{
		image: require("../../assets/images/download_dots.png"),
		title: "Comparte con amigos",
		subtitle: "Descarga tus canciones favoritas para escucharlas donde quieras",
	},
];

export default function OnboardingScreen({
	onNext,
	onSkip,
}: {
	onNext?: () => void;
	onSkip?: () => void;
}) {
	const { width } = useWindowDimensions();
	const [activeIndex, setActiveIndex] = React.useState(0);
	const flatListRef = React.useRef<FlatList>(null);

	const handleNext = () => {
		if (activeIndex < onboardingData.length - 1) {
			flatListRef.current?.scrollToIndex({ index: activeIndex + 1 });
		} else if (onNext) {
			onNext();
		}
	};

	const handleDotPress = (index: number) => {
		flatListRef.current?.scrollToIndex({ index });
	};

	const onViewRef = React.useRef(({ viewableItems }: any) => {
		if (viewableItems.length > 0) {
			setActiveIndex(viewableItems[0].index);
		}
	});

	const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

	return (
		<View style={styles.container}>
			<FlatList
				data={onboardingData}
				keyExtractor={(_, index) => index.toString()}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				ref={flatListRef}
				onViewableItemsChanged={onViewRef.current}
				viewabilityConfig={viewConfigRef.current}
				renderItem={({ item }) => (
					<View style={[styles.slide, { width }]}>
						<View style={styles.imageWrapper}>
							<Image
								source={item.image}
								style={styles.image}
								resizeMode="cover"
							/>
						</View>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.subtitle}>{item.subtitle}</Text>
					</View>
				)}
			/>

			<View style={styles.dotsContainer}>
				{onboardingData.map((_, idx) => (
					<TouchableOpacity key={idx} onPress={() => handleDotPress(idx)}>
						<View
							style={[styles.dot, idx === activeIndex && styles.activeDot]}
						/>
					</TouchableOpacity>
				))}
			</View>

			<View style={{ marginTop: "auto", width: "100%", alignItems: "center" }}>
				<TouchableOpacity style={styles.button} onPress={handleNext}>
					<Text style={styles.buttonText}>
						{activeIndex === onboardingData.length - 1
							? "Comenzar"
							: "Siguiente"}
					</Text>
				</TouchableOpacity>
				{activeIndex !== onboardingData.length - 1 && (
					<TouchableOpacity onPress={onSkip}>
						<Text style={styles.skipText}>Saltar</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}
