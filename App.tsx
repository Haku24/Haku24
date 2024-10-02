import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Resume = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={require('./image/ResumeImg.jpg')} style={styles.photo} />
          <Text style={styles.name}>Cedric James C. Olanda</Text>
          <Text style={styles.subtitle}>Software Engineer</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Objective:</Text>
        <Text style={styles.content}>
        Enthusiastic and inventive IT aficionado with a flair for untangling intricate technological puzzles. 
        Proficient in the realms of software development, system administration, and fortifying network security.
         Eagerly pursuing avenues to harness my expertise within a dynamic landscape, propelling business triumph and sculpting impactful solutions.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Education:</Text>
        <Text style={styles.content}>Bachelor of Science in Information Technology</Text>
        <Text style={styles.content}>Pinamalayan Maritime Foundation and Technological College Inc. - Graduated: 2019</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Work Experience:</Text>
        <Text style={styles.content}>Game Developer</Text>
        <Text style={styles.content}>Intel Corp. - October 2021 to Present</Text>
        <Text style={styles.content}>
        - Orchestrated and inspired a collaborative effort to craft a state-of-the-art Customer Relationship Management (CRM) system, 
        igniting a remarkable surge in sales productivity.
        </Text>
        <Text style={styles.content}>
        - Pioneered the fine-tuning of backend APIs, elevating system performance and scalability to new heights.
        </Text>
      </View>
      
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Skills:</Text>
          <Text style={styles.content}>React Native</Text>
          <Text style={styles.content}>Relational and </Text>
          <Text style={styles.content}>NoSQL databases</Text>
          <Text style={styles.content}>(MySQL, MongoDB)</Text>
          <Text style={styles.content}>Problem-solving and </Text>
          <Text style={styles.content}> communication skills</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Certifications:</Text>
          <Text style={styles.content}>AWS Certified Solutions </Text>
          <Text style={styles.content}> Architect - Associate,</Text>
          <Text style={styles.content}>Amazon Web Services - 2021</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>References:</Text>
        <Text style={styles.content}>Available upon request.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  content: {
    fontSize: 11,
    marginBottom: 5,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default Resume;
