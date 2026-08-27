"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Shared/Button";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { quizQuestions, tierResults, computeQuizResult, type QuizTier } from "./quizData";
import { QuizOptionButton } from "./QuizOptionButton";

export function Quiz() {
  const [answers, setAnswers] = useState<QuizTier[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const groupId = useId();

  const step = answers.length;
  const isDone = step >= quizQuestions.length;
  const result = isDone ? tierResults[computeQuizResult(answers)] : null;

  const handleSelect = (tier: QuizTier) => {
    setAnswers((prev) => [...prev, tier]);
  };

  const reset = () => setAnswers([]);

  return (
    <div className="mx-auto max-w-[640px] border border-line-light bg-white p-8 sm:p-10">
      {!isDone && (
        <div className="mb-8 flex items-center justify-center gap-2" aria-hidden>
          {quizQuestions.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 w-8 rounded-full transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
                i <= step ? "bg-bronze" : "bg-line-light",
              )}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key={step}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="group"
            aria-labelledby={`${groupId}-q${step}`}
          >
            <h3
              id={`${groupId}-q${step}`}
              className="text-center font-serif text-xl font-medium text-ink"
            >
              {quizQuestions[step].question}
            </h3>
            <div className="mt-7 flex flex-col gap-3">
              {quizQuestions[step].options.map((option) => (
                <QuizOptionButton
                  key={option.label}
                  label={option.label}
                  onSelect={() => handleSelect(option.tier)}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-[11px] font-semibold tracking-[0.14em] text-bronze uppercase">
              Formato indicado
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
              {result!.title}
            </h3>
            <p className="mx-auto mt-3 max-w-[440px] text-sm text-muted-light">
              {result!.text}
            </p>
            <div className="mt-7 flex flex-col items-center gap-4">
              <Button href={whatsappLink(result!.message)} external>
                Falar sobre {result!.title}
              </Button>
              <button
                onClick={reset}
                className="text-[11px] font-semibold tracking-[0.1em] text-muted-light uppercase transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-bronze"
              >
                Refazer teste
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
