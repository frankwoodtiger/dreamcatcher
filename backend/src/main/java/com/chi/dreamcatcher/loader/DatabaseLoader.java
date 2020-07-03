package com.chi.dreamcatcher.loader;

import com.chi.dreamcatcher.entity.Choice;
import com.chi.dreamcatcher.entity.Question;
import com.chi.dreamcatcher.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final QuestionRepository questionRepository;

    @Autowired
    public DatabaseLoader(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        questionRepository.save(createQuestion(
                "What is the supreme law of the land?",
                new String[] {
                    "The Constitution",
                    "The Independence",
                    "The Legislation"
                },
                Set.of(0)));
        questionRepository.save(createQuestion(
                "What does the Constitution do?",
                new String[] {
                    "Sets up the government",
                    "Sets up the military",
                    "Defines the government",
                    "Defines the legislation",
                    "Protects basic rights of Americans",
                    "Protects the law of Americans"
                },
                Set.of(0, 2, 4)));
        questionRepository.save(createQuestion(
                "The idea of self-government is in the first three words of the Constitution. What are these words?",
                new String[] {
                    "We the Government",
                    "We the Police",
                    "We the America",
                    "We the People"
                },
                Set.of(3)));
        questionRepository.save(createQuestion(
                "What is an amendment?",
                new String[] {
                    "A commitment (to the Constitution)",
                    "A change (to the Constitution)",
                    "A declaration (to the Constitution)",
                    "An addition (to the Constitution)"
                },
                Set.of(1, 3)));
        questionRepository.save(createQuestion(
                "What do we call the first ten amendments to the Constitution?",
                new String[] {
                    "The declaration of Rights",
                    "The Bill of Rights",
                    "The Law of Rights",
                    "The Bill of Laws"
                },
                Set.of(1)));
        questionRepository.save(createQuestion(
                "What is one right or freedom from the First Amendment?",
                new String[] {
                    "Speech",
                    "Religion",
                    "Assembly",
                    "Press",
                    "Petition the government",
                    "Sexual orientation",
                    "Abortion",
                    "Information",
                    "Owning weaponry"
                },
                Set.of(0, 1, 2, 3, 4)));
        questionRepository.save(createQuestion(
                "How many amendments does the Constitution have?",
                new String[] {
                    "15",
                    "16",
                    "17",
                    "18",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28"
                },
                Set.of(7)));
        questionRepository.save(createQuestion(
                "What did the Declaration of Independence do?",
                new String[] {
                    "Announced our independence (from Great Britain)",
                    "Declared our independence (from Great Britain)",
                    "Said that the United States is free (from Great Britain)",
                    "Reclaimed our independence (from Great Britain)",
                    "Declared war (to Great Britain)"
                },
                Set.of(0, 1, 2)));
        questionRepository.save(createQuestion(
                "What is one of the rights in the Declaration of Independence?",
                new String[] {
                    "Life",
                    "Liberty",
                    "pursuit of happiness",
                    "Speech",
                    "Religion",
                    "Assembly",
                    "Press",
                    "Information"
                },
                Set.of(0, 1, 2)));
        questionRepository.save(createQuestion(
                "What is freedom of religion?",
                new String[] {
                    "You can practice any religion, or not practice a religion.",
                    "You can convert anyone into believing your religion.",
                    "You are free from any religion."
                },
                Set.of(0)));
        questionRepository.save(createQuestion(
                "What is the economic system in the United States?",
                new String[] {
                    "Capitalist economy",
                    "Market economy",
                    "Command economy",
                    "Communist economy",
                    "Mixed economy"
                },
                Set.of(0, 1)));
        questionRepository.save(createQuestion(
                "What is the \"rule of law\"?",
                new String[] {
                    "Everyone must follow the law.",
                    "Leaders must obey the law.",
                    "Government must obey the law.",
                    "No one is above the law. ",
                    "Government can control the law.",
                    "Leaders are excluded the law."
                },
                Set.of(0, 1, 2, 3)));
        questionRepository.save(createQuestion(
                "Name one branch or part of the government.",
                new String[] {
                    "Congress",
                    "Legislative",
                    "President",
                    "Executive",
                    "The courts",
                    "Judicial",
                    "Legislation",
                    "The council",
                    "Adjudication",
                    "Justification"
                },
                Set.of(0, 1, 2, 3, 4, 5)));
        questionRepository.save(createQuestion(
                "What stops one branch of government from becoming too powerful?",
                new String[] {
                    "Checks and balances",
                    "Separation of powers",
                    "Checks and orders",
                    "Orders and balances",
                    "Checks and balances",
                    "Checks and powers",
                    "Powers and balanceS",
                    "Separation of orders",
                    "Separation of balances"
                },
                Set.of(0, 1)));
    }

    private Question createQuestion(String qtext, String[] choiceArray, Set<Integer> answerIdxSet) {
        Set<Choice> choices = new HashSet<>();
        Question question = new Question(qtext, choices);
        question.setText(qtext);
        for (int i = 0; i < choiceArray.length; i++) {
            choices.add(new Choice(choiceArray[i], answerIdxSet.contains(i), question));
        }
        return question;
    }
}
