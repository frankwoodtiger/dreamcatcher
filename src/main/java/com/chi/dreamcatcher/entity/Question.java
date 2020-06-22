package com.chi.dreamcatcher.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;
import javax.validation.constraints.Size;

@Entity
public class Question extends AbstractEntity {
    @Column(length = 2048)
    @Size(max = 2048)
    private String text;

    // Explanation on where to place mappedBy and JoinColumn: https://www.baeldung.com/jpa-joincolumn-vs-mappedby
    // Explanation on owning side for one-to-many relation: https://stackoverflow.com/questions/2749689/what-is-the-owning-side-in-an-orm-mapping
    // Explanation on using CascadeType.PERSIST: https://stackoverflow.com/questions/9650453/hibernate-onetomany-save-children-by-cascade
    @OneToMany(mappedBy = "question", cascade= CascadeType.PERSIST)
    private Set<Choice> choices;

    protected Question() {
        super();
    }

    public Question(@Size(max = 2048) String text, Set<Choice> choices) {
        this.text = text;
        this.choices = choices;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Set<Choice> getChoices() {
        return choices;
    }

    public void setChoices(Set<Choice> choices) {
        this.choices = choices;
    }
}
