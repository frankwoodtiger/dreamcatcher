package com.chi.dreamcatcher.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

@Entity
public class Choice extends AbstractEntity {
    @Column(length = 2048)
    @Size(max = 2048)
    private String text;

    private boolean isAnswer;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    protected Choice() {
        super();
    }

    public Choice(@Size(max = 2048) String text, boolean isAnswer, Question question) {
        this.text = text;
        this.isAnswer = isAnswer;
        this.question = question;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isAnswer() {
        return isAnswer;
    }

    public void setAnswer(boolean answer) {
        isAnswer = answer;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
