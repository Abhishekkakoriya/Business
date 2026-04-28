"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Search, BookOpen, ChevronDown, Copy, Check, Sparkles, TrendingUp, Clock, Building2, Lightbulb } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

type Difficulty = "Easy" | "Medium" | "Hard"

type Question = {
  id: number
  title: string
  difficulty: Difficulty
  category: string
  description: string
  examples: { input: string; output: string; explanation: string }[]
  constraints: string[]
  approach: string[]
  solution: { javascript: string; python: string }
  timeComplexity: string
  spaceComplexity: string
  companies: string[]
  relatedTopics: string[]
  hints: string[]
  estimatedTime: string
}

const categories = ["All Categories", "Arrays", "Strings", "Linked Lists", "Trees", "Dynamic Programming", "Graphs", "Miscellaneous"]
const difficulties = ["All Levels", "Easy", "Medium", "Hard"]

const questionsData: Question[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    description: "Given an array of integers nums and an integer target, return indices of two numbers that add up to target. You may assume each input has exactly one solution, and you cannot use the same element twice.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "nums[1] + nums[2] == 6" }
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "-10⁹ ≤ target ≤ 10⁹", "Only one valid answer exists"],
    approach: [
      "Create a hash map to store values and their indices as we iterate",
      "For each number, calculate complement (target - current number)",
      "Check if complement exists in hash map - if yes, we found our pair",
      "If not found, add current number and index to hash map",
      "Continue until pair is found",
      "Time: O(n), Space: O(n) - single pass with hash map"
    ],
    solution: {
      javascript: `function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Example usage:
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6));      // [1,2]`,
      python: `def two_sum(nums, target):
    """
    Find two numbers that add up to target
    Returns: List of two indices
    """
    seen = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in seen:
            return [seen[complement], i]

        seen[num] = i

    return []

# Example usage:
print(two_sum([2,7,11,15], 9))  # [0,1]
print(two_sum([3,2,4], 6))       # [1,2]`
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    companies: ["Amazon India", "Flipkart", "TCS", "Infosys", "Wipro", "Paytm"],
    relatedTopics: ["Hash Table", "Array", "Two Pointers"],
    hints: [
      "A brute force solution using nested loops would be O(n²). Can we do better?",
      "Think about trading space for time. What data structure offers O(1) lookup?",
      "For each number, what other number would complete the pair?"
    ],
    estimatedTime: "15 min"
  },
  {
    id: 2,
    title: "Reverse a String",
    difficulty: "Easy",
    category: "Strings",
    description: "Write a function that reverses a string. The input string is given as an array of characters. You must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]', explanation: "The string 'hello' reversed is 'olleh'" },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]', explanation: "Palindrome check using reversal" }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ASCII character"],
    approach: [
      "Use two pointers: one at the beginning, one at the end",
      "Swap characters at both pointers",
      "Move left pointer forward, right pointer backward",
      "Continue until pointers meet in the middle",
      "In-place modification, no extra space needed"
    ],
    solution: {
      javascript: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}

// Alternative: Using built-in reverse
function reverseStringAlt(s) {
  return s.reverse();
}`,
      python: `def reverse_string(s):
    """Reverse string in-place using two pointers"""
    left, right = 0, len(s) - 1

    while left < right:
        # Swap characters
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

    return s

# Alternative: Pythonic way
def reverse_string_alt(s):
    return s[::-1]`
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    companies: ["Cognizant", "HCL", "Tech Mahindra", "Capgemini", "Accenture"],
    relatedTopics: ["Two Pointers", "String"],
    hints: [
      "Think about swapping elements from both ends moving towards center",
      "Can you do it without using extra space?",
      "Two pointer technique is key here"
    ],
    estimatedTime: "10 min"
  },
  {
    id: 3,
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "Strings",
    description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: "After removing non-alphanumeric chars and converting to lowercase: 'amanaplanacanalpanama' is a palindrome" },
      { input: 's = "race a car"', output: 'false', explanation: "'raceacar' is not a palindrome" }
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    approach: [
      "Convert string to lowercase and remove non-alphanumeric characters",
      "Use two pointers from both ends",
      "Compare characters at both pointers",
      "If they don't match, it's not a palindrome",
      "Move pointers inward until they meet"
    ],
    solution: {
      javascript: `function isPalindrome(s) {
  // Clean the string: lowercase and alphanumeric only
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true`,
      python: `def is_palindrome(s):
    """Check if string is a palindrome"""
    # Clean string: lowercase and alphanumeric only
    cleaned = ''.join(c.lower() for c in s if c.isalnum())

    left, right = 0, len(cleaned) - 1

    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1

    return True

print(is_palindrome("A man, a plan, a canal: Panama"))  # True`
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    companies: ["TCS", "Infosys", "Cognizant", "Wipro"],
    relatedTopics: ["Two Pointers", "String"],
    hints: [
      "First clean the string by removing non-alphanumeric characters",
      "Two pointer technique works well for palindrome checking",
      "Don't forget to handle case sensitivity"
    ],
    estimatedTime: "15 min"
  },
  {
    id: 4,
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    difficulty: "Medium",
    category: "Arrays",
    description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] has the largest sum = 6" },
      { input: "nums = [1]", output: "1", explanation: "Single element array" }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    approach: [
      "Use Kadane's Algorithm for optimal solution",
      "Maintain current sum and maximum sum seen so far",
      "At each element, decide: extend current subarray or start new one",
      "Current sum = max(current element, current sum + current element)",
      "Update maximum if current sum is larger",
      "Single pass solution, O(n) time"
    ],
    solution: {
      javascript: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend the existing subarray or start new
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maximum if needed
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6`,
      python: `def max_subarray(nums):
    """
    Find maximum sum of contiguous subarray
    Using Kadane's Algorithm
    """
    max_sum = current_sum = nums[0]

    for num in nums[1:]:
        # Either extend or start new subarray
        current_sum = max(num, current_sum + num)

        # Update maximum
        max_sum = max(max_sum, current_sum)

    return max_sum

print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6`
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    companies: ["Amazon India", "Flipkart", "Microsoft India", "Google India", "Paytm"],
    relatedTopics: ["Dynamic Programming", "Array", "Divide and Conquer"],
    hints: [
      "Kadane's Algorithm is the optimal approach here",
      "At each position, decide whether to continue the current subarray or start anew",
      "Keep track of both current sum and maximum sum"
    ],
    estimatedTime: "20 min"
  },
]

export default function InterviewPrepPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels")
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)
  const [selectedTab, setSelectedTab] = useState<"overview" | "solution" | "complexity">("overview")
  const [selectedLanguage, setSelectedLanguage] = useState<"javascript" | "python">("javascript")
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set())

  const filteredQuestions = questionsData.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || q.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All Levels" || q.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const stats = {
    total: questionsData.length,
    easy: questionsData.filter(q => q.difficulty === "Easy").length,
    medium: questionsData.filter(q => q.difficulty === "Medium").length,
    hard: questionsData.filter(q => q.difficulty === "Hard").length
  }

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "Easy": return "bg-emerald-100 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 border-2 border-emerald-300 dark:border-emerald-800"
      case "Medium": return "bg-amber-100 dark:bg-amber-950/20 text-amber-900 dark:text-amber-400 border-2 border-amber-300 dark:border-amber-800"
      case "Hard": return "bg-rose-100 dark:bg-rose-950/20 text-rose-800 dark:text-rose-400 border-2 border-rose-300 dark:border-rose-800"
    }
  }

  const copyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const toggleComplete = (id: number) => {
    const newCompleted = new Set(completedQuestions)
    if (newCompleted.has(id)) {
      newCompleted.delete(id)
    } else {
      newCompleted.add(id)
    }
    setCompletedQuestions(newCompleted)
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 -z-10" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Forever • Updated for 2026</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Master the Top <span className="gradient-text">50</span> Coding Interview Questions
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Handpicked questions asked at India's top tech companies. Complete solutions with detailed explanations in multiple languages.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stats.total}</div>
                <div className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-1 whitespace-nowrap">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Questions</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">{stats.easy}</div>
                <div className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-1 whitespace-nowrap">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Easy</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-700 dark:text-amber-400 mb-2">{stats.medium}</div>
                <div className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-1 whitespace-nowrap">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Medium</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card border rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-700 dark:text-rose-400 mb-2">{stats.hard}</div>
                <div className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-1 whitespace-nowrap">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Hard</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-12 text-sm md:text-base">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="font-medium">JavaScript & Python</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">Detailed Solutions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Top Indian Companies</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Search & Filters */}
      <Section className="py-8 md:py-12 border-t bg-muted/30">
        <Container>
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-card border-2 border-border rounded-2xl text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Categories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card border border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Difficulty</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedDifficulty === difficulty
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card border border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredQuestions.length}</span> of{" "}
                <span className="font-semibold text-foreground">{stats.total}</span> questions
              </p>
              <p className="text-sm text-muted-foreground">
                Completed: <span className="font-semibold text-emerald-600">{completedQuestions.size}</span>/{stats.total}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Questions List */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-6xl mx-auto space-y-6">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-16">
                <Code2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredQuestions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className={`bg-card border-2 rounded-3xl overflow-hidden transition-all hover:shadow-xl ${
                    expandedQuestion === question.id ? "shadow-2xl border-primary/50" : "border-border hover:border-primary/30"
                  }`}>
                    {/* Question Header - Clickable */}
                    <button
                      onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
                      className="w-full p-6 md:p-8 text-left hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start gap-4 md:gap-6">
                        {/* Question Number Badge */}
                        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                          #{question.id}
                        </div>

                        {/* Question Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {question.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            {/* Difficulty */}
                            <span className={`px-3 py-1.5 rounded-full font-medium ${getDifficultyColor(question.difficulty)}`}>
                              {question.difficulty}
                            </span>

                            {/* Category */}
                            <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                              {question.category}
                            </span>

                            {/* Time Estimate */}
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {question.estimatedTime}
                            </span>

                            {/* Companies Count */}
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                              <Building2 className="w-4 h-4" />
                              {question.companies.length} companies
                            </span>
                          </div>
                        </div>

                        {/* Expand Icon */}
                        <ChevronDown className={`flex-shrink-0 w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                          expandedQuestion === question.id ? "rotate-180" : ""
                        }`} />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedQuestion === question.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="border-t-2 border-border"
                        >
                          <div className="p-6 md:p-8 bg-muted/20">
                            {/* Tabs */}
                            <div className="flex gap-2 mb-6 border-b">
                              <button
                                onClick={() => setSelectedTab("overview")}
                                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                                  selectedTab === "overview"
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                Overview
                              </button>
                              <button
                                onClick={() => setSelectedTab("solution")}
                                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                                  selectedTab === "solution"
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                Solution
                              </button>
                              <button
                                onClick={() => setSelectedTab("complexity")}
                                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                                  selectedTab === "complexity"
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                Complexity
                              </button>
                            </div>

                            {/* Tab Content */}
                            <div className="space-y-8">
                              {selectedTab === "overview" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="space-y-8"
                                >
                                  {/* Description */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
                                      <BookOpen className="w-4 h-4" />
                                      Problem Description
                                    </h4>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                      {question.description}
                                    </p>
                                  </div>

                                  {/* Examples */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-4 flex items-center gap-2">
                                      <Code2 className="w-4 h-4" />
                                      Examples
                                    </h4>
                                    <div className="space-y-4">
                                      {question.examples.map((example, i) => (
                                        <div key={i} className="bg-card border-2 border-border rounded-2xl p-6">
                                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                              <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2 block">Input:</span>
                                              <code className="block text-sm md:text-base font-mono bg-muted px-4 py-3 rounded-lg text-foreground">
                                                {example.input}
                                              </code>
                                            </div>
                                            <div>
                                              <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2 block">Output:</span>
                                              <code className="block text-sm md:text-base font-mono bg-muted px-4 py-3 rounded-lg text-foreground">
                                                {example.output}
                                              </code>
                                            </div>
                                          </div>
                                          <div className="pt-4 border-t">
                                            <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2 block">Explanation:</span>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{example.explanation}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Constraints */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">Constraints</h4>
                                    <ul className="space-y-2">
                                      {question.constraints.map((constraint, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                          <span className="text-primary">•</span>
                                          <span>{constraint}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Approach */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-4 flex items-center gap-2">
                                      <Lightbulb className="w-4 h-4" />
                                      Approach & Strategy
                                    </h4>
                                    <div className="space-y-3">
                                      {question.approach.map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                          </div>
                                          <p className="flex-1 text-base text-muted-foreground leading-relaxed pt-1">{step}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Hints */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-4">Hints</h4>
                                    <div className="space-y-3">
                                      {question.hints.map((hint, i) => (
                                        <div key={i} className="bg-amber-100 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800 rounded-xl p-4">
                                          <p className="text-sm text-amber-900 dark:text-amber-100 flex gap-2">
                                            <span className="font-bold">Hint {i + 1}:</span>
                                            <span>{hint}</span>
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}

                              {selectedTab === "solution" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="space-y-6"
                                >
                                  {/* Language Selector */}
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary flex items-center gap-2">
                                      <Code2 className="w-4 h-4" />
                                      Code Solution
                                    </h4>
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => setSelectedLanguage("javascript")}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                          selectedLanguage === "javascript"
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "bg-card border border-border hover:border-primary/50"
                                        }`}
                                      >
                                        JavaScript
                                      </button>
                                      <button
                                        onClick={() => setSelectedLanguage("python")}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                          selectedLanguage === "python"
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "bg-card border border-border hover:border-primary/50"
                                        }`}
                                      >
                                        Python
                                      </button>
                                    </div>
                                  </div>

                                  {/* Code Block */}
                                  <div className="relative group/code">
                                    <div className="absolute top-4 right-4 z-10">
                                      <button
                                        onClick={() => copyCode(question.solution[selectedLanguage], question.id)}
                                        className="flex items-center gap-2 px-3 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-lg text-sm font-medium transition-colors"
                                      >
                                        {copiedId === question.id ? (
                                          <>
                                            <Check className="w-4 h-4" />
                                            Copied!
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-4 h-4" />
                                            Copy
                                          </>
                                        )}
                                      </button>
                                    </div>
                                    <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 md:p-8 overflow-x-auto">
                                      <pre className="text-sm md:text-base text-[#c9d1d9] font-mono leading-relaxed">
                                        <code>{question.solution[selectedLanguage]}</code>
                                      </pre>
                                    </div>
                                  </div>

                                  {/* Related Topics */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">Related Topics</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {question.relatedTopics.map((topic, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}

                              {selectedTab === "complexity" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="space-y-6"
                                >
                                  {/* Complexity Cards */}
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                        <h5 className="text-sm font-bold uppercase tracking-wide text-emerald-900 dark:text-emerald-100">Time Complexity</h5>
                                      </div>
                                      <code className="text-3xl md:text-4xl font-mono font-bold text-emerald-700 dark:text-emerald-400">
                                        {question.timeComplexity}
                                      </code>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        <h5 className="text-sm font-bold uppercase tracking-wide text-blue-900 dark:text-blue-100">Space Complexity</h5>
                                      </div>
                                      <code className="text-3xl md:text-4xl font-mono font-bold text-blue-700 dark:text-blue-400">
                                        {question.spaceComplexity}
                                      </code>
                                    </div>
                                  </div>

                                  {/* Companies */}
                                  <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-4 flex items-center gap-2">
                                      <Building2 className="w-4 h-4" />
                                      Asked by Top Companies
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                      {question.companies.map((company, i) => (
                                        <div key={i} className="bg-card border-2 border-border rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-md transition-all">
                                          <span className="font-semibold text-sm">{company}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </Container>
      </Section>
    </main>
  )
}