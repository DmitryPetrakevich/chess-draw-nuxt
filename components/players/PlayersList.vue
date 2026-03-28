<template>
    <div class="players-list">
        <div v-if="playersStore.PlayersList.length" class="players-table">
            <div class="table-header">
                <div class="col-number">№</div>
                <div class="col-name">Имя участника</div>
                <div class="col-rating">Рейтинг</div>
            </div>
            
            <div class="table-body">
                <div
                    v-for="(item, index) in playersStore.PlayersList"
                    :key="item.id"
                    class="table-row"
                    @contextmenu.prevent="showContextmenu($event, item)"
                >
                    <div class="col-number">{{ index + 1 }}</div>
                    <div class="col-name">{{ item.name }}</div>
                    <div class="col-rating">
                        <span class="rating-badge">
                            {{ item.rating || '—' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="empty">
            <span class="empty-icon">👥</span>
            <p>Добавьте первого участника</p>
        </div>

        <ContextMenu
        v-model:is-open="showMenu"
        ref="contextMenuRef"
        >
            <div
            class="context-menu-item"
            >
                Изменить
            </div>

            <div
            class="context-menu-item context-menu-item-delete"
            @click="handleDeletePlayer"
            >
                Удалить
            </div>

        </ContextMenu>
    </div>
</template>

<script setup>
import { usePlayersStore } from '#imports';

import ContextMenu from '~/ui/ContextMenu.vue';

const playersStore = usePlayersStore()

const showMenu = ref(false)
const contextMenuRef = ref(null)
const currentPlayer = ref(null)

const showContextmenu = (e, player) => {
    currentPlayer.value = player;
    contextMenuRef.value?.openMenu(e)
}

const handleDeletePlayer = () => {
    if(!currentPlayer.value) return

    playersStore.deletePlayer(currentPlayer.value.id)
    showMenu.value = false
}

</script>

<style scoped lang="less">
.players-list {
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    max-width: 800px;
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.players-table {
    width: 100%;
}

.table-header {
    display: flex;
    background-color: #f3f4f6;
    padding: 14px 16px;
    border-bottom: 1px solid #e5e7eb;
    font-weight: 600;
    font-size: 14px;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.table-row {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f3f4f6;
    transition: background-color 0.2s ease;
}

.table-row:hover {
    background-color: #e1e3e4;
}

.table-row:last-child {
    border-bottom: none;
}

.col-number {
    width: 60px;
    flex-shrink: 0;
    color: #9ca3af;
    font-size: 14px;
    font-weight: 500;
}

.col-name {
    flex: 1;
    color: #1f2937;
    font-size: 15px;
    font-weight: 500;
}

.col-rating {
    width: 100px;
    flex-shrink: 0;
    text-align: right;
}

.rating-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'SF Mono', Monaco, monospace;
}

.rating-none {
    background-color: #f3f4f6;
    color: #9ca3af;
}

.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    text-align: center;
}

.empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
}

.empty p {
    color: #9ca3af;
    font-size: 16px;
    margin: 0;
}

.context-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
        background-color: @gray-300;
    }

    &-delete {
        &:hover {
            background-color: @red-200;
        }
    }
}
</style>