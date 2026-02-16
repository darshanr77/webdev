import pandas as pd
# Function to implement the Find-S Algorithm
def find_s_algorithm(file_path):
# Read the dataset
data = pd.read_csv(file_path)
print("Training data:")
print(data)
# Separate attributes and class label
attributes = data.columns[:-1] # All columns except the last one
class_label = data.columns[-1] # Last column is the class label
# Initialize hypothesis with '?' for each attribute
hypothesis = ['?' for _ in attributes]
# Iterate through the dataset to find the specific hypothesis
for index, row in data.iterrows():
# Only consider positive examples (class label == 'Yes')
if row[class_label] == 'Yes':
for i, value in enumerate(row[attributes]):
# If hypothesis is '?' or matches the current value, update hypothesis
if hypothesis[i] == '?' or hypothesis[i] == value:
hypothesis[i] = value
else:
# If the value is different, set '?' for that attribute
hypothesis[i] = '?'
return hypothesis
# Define file path
file_path = r"C:\Users\atme\Desktop\example ml\training_data.csv"
# Call the Find-S algorithm
hypothesis = find_s_algorithm(file_path)
# Print the final hypothesis
print("\nThe final hypothesis is:", hypothesis)