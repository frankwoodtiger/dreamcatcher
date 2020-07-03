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
